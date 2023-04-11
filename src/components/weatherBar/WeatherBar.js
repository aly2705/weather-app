import React from "react";
import classes from "./WeatherBar.module.scss";
import Location from "./current/Location";
import CurrentWeather from "./current/CurrentWeather";
import CurrentForecast from "./forecast/CurrentForecast";
import SunActivity from "./sunActivity/SunActivity";
import SearchBar from "../UI/SearchBar";
import icons from "../../assets/icons/icons.svg";

const WeatherBar = () => {
  const scrollHandler = () => {
    document.getElementById("dashboard").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={classes.current}>
      <SearchBar />
      <Location />
      <CurrentWeather />
      <CurrentForecast />
      <SunActivity />
      <button className={classes.current__btn} onClick={scrollHandler}>
        <svg>
          <use href={`${icons}#icon-arrow-down`}></use>
        </svg>
      </button>
    </section>
  );
};

export default WeatherBar;
