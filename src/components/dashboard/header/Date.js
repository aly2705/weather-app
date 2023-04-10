import React, { useContext } from "react";
import classes from "./Date.module.scss";
import CurrentContext from "../../../store/current-context";

const Date = () => {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = useContext(CurrentContext).location.localTime?.toLocaleString(
    "en-US",
    dateOptions
  );
  return (
    <div className={classes["date-container"]}>
      <h1 className={classes.title}>Your Dashboard</h1>
      <span className={classes.date}>{date}</span>
    </div>
  );
};

export default Date;
