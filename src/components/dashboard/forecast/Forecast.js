import React, { useContext } from "react";
import classes from "./Forecast.module.scss";
import Day from "./Day";
import CurrentContext from "../../../store/current-context";

const Forecast = () => {
  const forecastDays = useContext(CurrentContext).forecast.days;
  return (
    <section className={classes.forecast}>
      <h2>3-day Forecast</h2>
      <div className={classes.forecast__days}>
        {forecastDays &&
          forecastDays.map((day, i) => {
            if (i === 0) return null;
            return <Day key={i} dayForecast={day} />;
          })}
      </div>
    </section>
  );
};

export default Forecast;
