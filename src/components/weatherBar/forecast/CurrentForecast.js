import React from "react";
import classes from "./CurrentForecast.module.scss";
import Hour from "./Hour";
import icons from "../../../assets/icons/icons.svg";

const forecast = {
  time: "2023-04-08 01:00",
  temp_c: 9.5,
  condition: {
    icon: "//cdn.weatherapi.com/weather/64x64/night/122.png",
  },
  chance_of_rain: 0,
};
const forecasts = [forecast, forecast, forecast, forecast];

const CurrentForecast = () => {
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
      {forecasts.map((forecast, i) => {
        return <Hour key={i} forecast={forecast} />;
      })}
    </section>
  );
};

export default CurrentForecast;
