import React, { useContext, useRef } from "react";
import classes from "./SearchBar.module.scss";
import icons from "../../assets/icons/icons.svg";
import useHTTP from "../../hooks/useHTTP";
import { API_KEY, API_URL } from "../../helpers/config";
import CurrentContext from "../../store/current-context";
import ErrorModal from "./ErrorModal";
import LoadingSpinner from "./LoadingSpinner";

const SearchBar = () => {
  const searchInputRef = useRef();
  const { sendRequest, error, setError, isLoading } = useHTTP();
  const currentContext = useContext(CurrentContext);

  const processNewData = (data) => {
    currentContext.setCurrentData(data);
    searchInputRef.current.value = "";
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredCity = searchInputRef.current.value;
    const url = `${API_URL}/forecast.json?key=${API_KEY}&q=${enteredCity}&days=4`;
    sendRequest(url, processNewData);
  };

  const clearSearchHandler = () => {
    setError(null);
    searchInputRef.current.value = "";
  };

  return (
    <form className={classes.search} onSubmit={submitHandler}>
      <svg>
        <use href={`${icons}#icon-search`}></use>
      </svg>
      <input
        type="text"
        required
        placeholder="Search location here"
        ref={searchInputRef}
      />
      {isLoading && <LoadingSpinner />}

      {error && (
        <ErrorModal
          heading="Location not found"
          action="OK"
          text="The location you searched for couldn't be found. Try another location!"
          onClick={clearSearchHandler}
        />
      )}
    </form>
  );
};

export default SearchBar;
