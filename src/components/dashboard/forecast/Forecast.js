import React from "react";
import classes from "./Forecast.module.scss";
import Day from "./Day";

const dayForecast1 = {
  weekday: "Tuesday",
  icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
  minTemp: 3,
  maxTemp: 11,
  chanceOfRain: 25,
};
const dayForecast2 = {
  weekday: "Wednesday",
  icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
  minTemp: 3,
  maxTemp: 11,
  chanceOfRain: 25,
};
const dayForecast3 = {
  weekday: "Thursday",
  icon: "//cdn.weatherapi.com/weather/64x64/day/119.png",
  minTemp: 3,
  maxTemp: 11,
  chanceOfRain: 25,
};

const Forecast = () => {
  return (
    <section className={classes.forecast}>
      <h2>3-day Forecast</h2>
      <div className={classes.forecast__days}>
        <Day dayForecast={dayForecast1} />
        <Day dayForecast={dayForecast2} />
        <Day dayForecast={dayForecast3} />
      </div>
    </section>
  );
};

export default Forecast;
