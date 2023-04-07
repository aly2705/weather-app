import React from "react";
import classes from "./Favorites.module.scss";
import Pin from "./Pin";
import icons from "../../../assets/icons/icons.svg";

const Favorites = () => {
  return (
    <section className={classes.favorites}>
      <button
        type="button"
        className={`${classes.favorites__btn} ${classes["favorites__btn--back"]}`}
      >
        <svg>
          <use href={`${icons}#icon-keyboard_arrow_left`}></use>
        </svg>
      </button>

      <h2>Starred Locations</h2>
      <Pin />
      <Pin />
      <button
        type="button"
        className={`${classes.favorites__btn} ${classes["favorites__btn--next"]}`}
      >
        <svg>
          <use href={`${icons}#icon-keyboard_arrow_right`}></use>
        </svg>
      </button>
    </section>
  );
};

export default Favorites;
