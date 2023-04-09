import React, { useContext } from "react";
import classes from "./CurrentWeather.module.scss";
import CurrentContext from "../../../store/current-context";

const CurrentWeather = () => {
  const weather = useContext(CurrentContext).weather;
  const isClearNightIcon = weather.icon?.includes("113.png");
  return (
    <div className={classes.weather}>
      <div className={classes.weather__condition}>
        <figure className={classes.weather__icon}>
          <img
            src={weather.icon}
            alt="Weather Icon"
            style={isClearNightIcon ? { transform: "scale(1.4)" } : {}}
          />
          <figcaption className={classes.weather__temp}>
            {weather.temperature}
            <span>°C</span>
          </figcaption>
        </figure>
        <span className={classes.weather__text}>{weather.condition}</span>
      </div>
      <ul className={classes.weather__details}>
        <li>
          {weather.min}° / {weather.max}°
        </li>
        <li>Rain {weather.chanceOfRain}%</li>
        <li>Feels like {weather.feelsLike}°C</li>
      </ul>
    </div>
  );
};

export default CurrentWeather;
