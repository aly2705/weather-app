import React, { useContext } from "react";
import classes from "./SunActivity.module.scss";
import icons from "../../../assets/icons/icons.svg";
import CurrentContext from "../../../store/current-context";
import { convertHour } from "../../../helpers/helpers";

const SunActivity = () => {
  const weather = useContext(CurrentContext).weather;
  return (
    <section className={classes.sun}>
      <div className={classes.sun__activity}>
        <svg>
          <use href={`${icons}#icon-sunrise`}></use>
        </svg>
        <div className={classes["sun__activity-desc"]}>
          <span>Sunrise</span>
          <span>{convertHour(weather.sunrise)}</span>
        </div>
      </div>
      <div className={classes.sun__activity}>
        <svg>
          <use href={`${icons}#icon-sunset`}></use>
        </svg>
        <div className={classes["sun__activity-desc"]}>
          <span>Sunset</span>
          <span>{convertHour(weather.sunset)}</span>
        </div>
      </div>
    </section>
  );
};

export default SunActivity;
