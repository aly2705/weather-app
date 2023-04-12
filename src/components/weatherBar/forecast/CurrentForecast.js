import React, { useContext, useEffect, useRef, useState } from "react";
import classes from "./CurrentForecast.module.scss";
import Hour from "./Hour";
import icons from "../../../assets/icons/icons.svg";
import CurrentContext from "../../../store/current-context";

const CurrentForecast = () => {
  const contextForecast = useContext(CurrentContext).forecast;
  const [forecasts, setForecasts] = useState(contextForecast.hours);
  const lastHourRef = useRef();

  useEffect(() => {
    const initialForecasts = contextForecast.hours?.map((forecast, i) => {
      return { ...forecast, position: i };
    });

    setForecasts(initialForecasts);
  }, [contextForecast]);

  const translateBackHandler = () => {
    // Stops when first card is in the initial position
    setForecasts((previous) => {
      const repositioned = previous.map((forecast, i) => {
        if (i === forecast.position) return forecast;
        return { ...forecast, position: forecast.position + 1 };
      });

      return repositioned;
    });
  };
  const translateNextHandler = (e) => {
    // Stops when last card is visible
    const btnDistance = e.target.getBoundingClientRect().x;
    const cardDistance = lastHourRef.current.getBoundingClientRect().x;
    if (cardDistance < btnDistance) {
      return;
    }

    setForecasts((previous) => {
      const repositioned = previous.map((forecast, i) => {
        return { ...forecast, position: forecast.position - 1 };
      });

      return repositioned;
    });
  };

  return (
    <section className={classes.forecast}>
      <button
        type="button"
        className={`${classes.forecast__btn} ${classes["forecast__btn--back"]}`}
        onClick={translateBackHandler}
      >
        <svg>
          <use href={`${icons}#icon-keyboard_arrow_left`}></use>
        </svg>
      </button>
      <button
        type="button"
        className={`${classes.forecast__btn} ${classes["forecast__btn--next"]}`}
        onClick={translateNextHandler}
      >
        <svg>
          <use href={`${icons}#icon-keyboard_arrow_right`}></use>
        </svg>
      </button>
      <div className={classes.forecast__slider}>
        {forecasts &&
          forecasts.map((forecast, i) => {
            if (i === 23) {
              return (
                <div
                  className={`${classes.forecast__card}`}
                  data-position={forecast.position}
                  key={i}
                  style={{
                    transform: `translateX(${forecast.position * 115}%)`,
                  }}
                  ref={lastHourRef}
                >
                  <Hour forecast={forecast} />
                </div>
              );
            } else {
              return (
                <div
                  className={`${classes.forecast__card}`}
                  data-position={forecast.position}
                  key={i}
                  style={{
                    transform: `translateX(${forecast.position * 115}%)`,
                  }}
                >
                  <Hour forecast={forecast} />
                </div>
              );
            }
          })}
      </div>
    </section>
  );
};

export default CurrentForecast;
