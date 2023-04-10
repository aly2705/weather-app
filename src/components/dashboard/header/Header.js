import React from "react";
import classes from "./Header.module.scss";
import Date from "./Date";
import SearchBar from "../../UI/SearchBar";

const Header = () => {
  return (
    <header className={classes.header}>
      <Date />
      <SearchBar />
    </header>
  );
};

export default Header;
