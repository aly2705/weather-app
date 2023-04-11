import React, { useContext, useRef } from "react";
import classes from "./SearchBar.module.scss";
import icons from "../../assets/icons/icons.svg";
import useHTTP from "../../hooks/useHTTP";
import { API_KEY, API_URL } from "../../helpers/config";
import CurrentContext from "../../store/current-context";

const SearchBar = () => {
  const searchInputRef = useRef();
  const { sendRequest, error } = useHTTP();
  const currentContext = useContext(CurrentContext);

  const processNewData = (data) => {
    console.log(data);
    currentContext.setCurrentData(data);
    searchInputRef.current.value = "";
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredCity = searchInputRef.current.value;
    const url = `${API_URL}/forecast.json?key=${API_KEY}&q=${enteredCity}&days=4`;
    sendRequest(url, processNewData);
  };
  //console.log("Improve user feedback on location not found");

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

      {error && <p>❌</p>}
    </form>
  );
};

export default SearchBar;
