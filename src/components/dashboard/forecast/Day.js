import React from "react";
import classes from "./Day.module.scss";
import icons from "../../../assets/icons/icons.svg";

const Day = ({ dayForecast }) => {
  return (
    <div className={classes.day}>
      <div className={classes.day__time}>
        <div className={classes.day__weekday}>{dayForecast.weekday}</div>
        <div className={classes.day__date}>March 1, 2023</div>
      </div>
      <div className={classes.day__condition}>
        <img src={dayForecast.icon} alt="Weather Icon" />
        <div>
          <div className={classes.day__extremes}>
            {dayForecast.minTemp}° / {dayForecast.maxTemp}°
          </div>
          <span className={classes.day__rain}>
            <svg>
              <use href={`${icons}#icon-raindrops`}></use>
            </svg>
            {dayForecast.chanceOfRain}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Day;
