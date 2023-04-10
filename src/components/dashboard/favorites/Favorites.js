import React, { useEffect, useRef, useState } from "react";
import classes from "./Favorites.module.scss";
import Pin from "./Pin";
import icons from "../../../assets/icons/icons.svg";

const dummy_pins = [
  {
    city: "Cluj-Napoca",
    country: "Romania",
    icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
    temperature: 10,
    condition: "Sunny",
  },
  {
    city: "Brasov",
    country: "Romania",
    icon: "//cdn.weatherapi.com/weather/64x64/day/119.png",
    temperature: 4,
    condition: "Overcast",
  },
  {
    city: "Timisoara",
    country: "Romania",
    icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
    temperature: 7,
    condition: "Sunny",
  },
];

const Favorites = () => {
  const [pins, setPins] = useState([]);
  const lastPinRef = useRef();

  useEffect(() => {
    dummy_pins.forEach((pin, i) => (pin.position = i));
    setPins(dummy_pins);
  }, []);

  const translateBackHandler = () => {
    // Stops when first card is in the initial position
    setPins((previous) => {
      const repositioned = previous.map((pin, i) => {
        if (i === pin.position) return pin;
        return { ...pin, position: pin.position + 1 };
      });

      return repositioned;
    });
  };
  const translateNextHandler = (e) => {
    // Stops when last card is visible
    const btnDistance = e.target.getBoundingClientRect().x;
    const cardDistance = lastPinRef.current.getBoundingClientRect().x;
    if (cardDistance < btnDistance) {
      return;
    }
    setPins((previous) => {
      const repositioned = previous.map((pin, i) => {
        return { ...pin, position: pin.position - 1 };
      });

      return repositioned;
    });
  };

  return (
    <section className={classes.favorites}>
      <button
        type="button"
        className={`${classes.favorites__btn} ${classes["favorites__btn--back"]}`}
        onClick={translateBackHandler}
      >
        <svg>
          <use href={`${icons}#icon-keyboard_arrow_left`}></use>
        </svg>
      </button>

      <h2>Starred Locations</h2>
      <div className={classes.favorites__slider}>
        {pins &&
          pins.map((pin, i) => {
            if (i + 1 === pins.length) {
              return (
                <div
                  key={i}
                  className={classes.favorites__card}
                  style={{
                    transform: `translateX(${pin.position * 115}%)`,
                  }}
                  ref={lastPinRef}
                >
                  <Pin pin={pin} />
                </div>
              );
            } else {
              return (
                <div
                  key={i}
                  className={classes.favorites__card}
                  style={{
                    transform: `translateX(${pin.position * 115}%)`,
                  }}
                >
                  <Pin pin={pin} />
                </div>
              );
            }
          })}
      </div>
      <button
        type="button"
        onClick={translateNextHandler}
        className={`${classes.favorites__btn} ${classes["favorites__btn--next"]}`}
      >
        <svg>
          <use href={`${icons}#icon-keyboard_arrow_right`}></use>
        </svg>
      </button>
    </section>
  );
};

export default Favorites;
