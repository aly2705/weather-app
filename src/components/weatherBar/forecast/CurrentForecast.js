import React, { useContext } from "react";
import classes from "./CurrentForecast.module.scss";
import Hour from "./Hour";
import icons from "../../../assets/icons/icons.svg";
import CurrentContext from "../../../store/current-context";

const CurrentForecast = () => {
  const weather = useContext(CurrentContext).weather;
  const forecasts = weather.hours?.slice(1, 5);
  return (
    <section className={classes.forecast}>
      <button
        type="button"
        className={`${classes.forecast__btn} ${classes["forecast__btn--back"]}`}
      >
        <svg>
          <use href={`${icons}#icon-keyboard_arrow_left`}></use>
        </svg>
      </button>
      <button
        type="button"
        className={`${classes.forecast__btn} ${classes["forecast__btn--next"]}`}
      >
        <svg>
          <use href={`${icons}#icon-keyboard_arrow_right`}></use>
        </svg>
      </button>
      {forecasts &&
        forecasts.map((forecast, i) => {
          return <Hour key={i} forecast={forecast} />;
        })}
    </section>
  );
};

export default CurrentForecast;
