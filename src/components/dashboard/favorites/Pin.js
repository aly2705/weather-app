import React from "react";
import classes from "./Pin.module.scss";

const Pin = () => {
  return (
    <div className={classes.pin}>
      <h3>Cluj-Napoca, Romania</h3>
      <figure>
        <img
          src="//cdn.weatherapi.com/weather/64x64/day/122.png"
          alt="Weather Icon"
        />
        <figcaption>
          9<span>°C</span>
        </figcaption>
      </figure>
      <p>Partially Cloudy</p>
    </div>
  );
};

export default Pin;
