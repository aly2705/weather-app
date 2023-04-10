import React from "react";
import classes from "./SearchBar.module.scss";
import icons from "../../assets/icons/icons.svg";

const SearchBar = () => {
  return (
    <form className={classes.search}>
      <svg>
        <use href={`${icons}#icon-search`}></use>
      </svg>
      <input type="text" required placeholder="Search location here" />
    </form>
  );
};

export default SearchBar;
