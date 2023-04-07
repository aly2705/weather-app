import React from "react";
import classes from "./Date.module.scss";

const Date = () => {
  return (
    <div className={classes["date-container"]}>
      <h1 className={classes.title}>Your Dashboard</h1>
      <span className={classes.date}>Monday, Feb 29, 2023</span>
    </div>
  );
};

export default Date;
