import React from "react";
import classes from "./Hour.module.scss";
import icons from "../../../assets/icons/icons.svg";

const Hour = ({ forecast }) => {
  return (
    <div className={classes.hour}>
      <span className={classes.hour__time}>{forecast.time.slice(-5)}</span>
      <img src={forecast.condition.icon} alt="Weather Icon" />
      <span className={classes.hour__temp}>{forecast.temp_c}°C</span>
      <span className={classes.hour__rain}>
        <svg>
          <use href={`${icons}#icon-raindrops`}></use>
        </svg>
        {forecast.chance_of_rain}%
      </span>
    </div>
  );
};

export default Hour;
