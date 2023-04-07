import React from "react";
import classes from "./Location.module.scss";

const Location = () => {
  return (
    <div className={classes.location}>
      <div className={classes.location__city}> Bucharest, Romania</div>
      <div className={classes.location__hour}> 8:34 AM</div>
    </div>
  );
};

export default Location;
