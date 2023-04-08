import React from "react";
import classes from "./WeatherBar.module.scss";
import Location from "./current/Location";
import CurrentWeather from "./current/CurrentWeather";
import CurrentForecast from "./forecast/CurrentForecast";
import SunActivity from "./sunActivity/SunActivity";
import SearchBar from "../dashboard/header/SearchBar";

const WeatherBar = () => {
  return (
    <section className={classes.current}>
      <SearchBar />
      <Location />
      <CurrentWeather />
      <CurrentForecast />
      <SunActivity />
    </section>
  );
};

export default WeatherBar;
