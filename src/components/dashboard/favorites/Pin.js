import React from "react";
import classes from "./Pin.module.scss";

const Pin = ({ pin }) => {
  return (
    <div className={classes.pin}>
      <h3>
        {pin.city}, {pin.country}
      </h3>
      <figure>
        <img src={pin.icon} alt="Weather Icon" />
        <figcaption>
          {pin.temperature}
          <span>°C</span>
        </figcaption>
      </figure>
      <p>{pin.condition}</p>
    </div>
  );
};

export default Pin;
