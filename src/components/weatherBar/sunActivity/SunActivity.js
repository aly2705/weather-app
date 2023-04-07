import React from "react";
import classes from "./SunActivity.module.scss";
import icons from "../../../assets/icons/icons.svg";

const SunActivity = () => {
  return (
    <section className={classes.sun}>
      <div className={classes.sun__activity}>
        <svg>
          <use href={`${icons}#icon-sunrise`}></use>
        </svg>
        <div className={classes["sun__activity-desc"]}>
          <span>Sunrise</span>
          <span>19:26</span>
        </div>
      </div>
      <div className={classes.sun__activity}>
        <svg>
          <use href={`${icons}#icon-sunset`}></use>
        </svg>
        <div className={classes["sun__activity-desc"]}>
          <span>Sunset</span>
          <span>19:26</span>
        </div>
      </div>
    </section>
  );
};

export default SunActivity;
