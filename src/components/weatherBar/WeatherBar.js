import React from "react";
import classes from "./WeatherBar.module.scss";
import Location from "./current/Location";
import CurrentWeather from "./current/CurrentWeather";
import CurrentForecast from "./forecast/CurrentForecast";
import SunActivity from "./sunActivity/SunActivity";

const WeatherBar = () => {
  return (
    <section className={classes.current}>
      <Location />
      <CurrentWeather />
      <CurrentForecast />
      <SunActivity />
    </section>
  );
};

export default WeatherBar;
