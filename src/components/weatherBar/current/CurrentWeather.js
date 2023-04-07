import React from "react";
import classes from "./CurrentWeather.module.scss";

const CurrentWeather = () => {
  return (
    <div className={classes.weather}>
      <div className={classes.weather__condition}>
        <figure className={classes.weather__icon}>
          <img
            src="//cdn.weatherapi.com/weather/64x64/day/122.png"
            alt="Weather Icon"
          />
          <figcaption className={classes.weather__temp}>
            10<span>°C</span>
          </figcaption>
        </figure>
        <span className={classes.weather__text}>Overcast</span>
      </div>
      <ul className={classes.weather__details}>
        <li>2° / 10°</li>
        <li>Feels like 8°C</li>
        <li>Rain 5%</li>
      </ul>
    </div>
  );
};

export default CurrentWeather;
