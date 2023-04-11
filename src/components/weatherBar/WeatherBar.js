import React, { useContext } from "react";
import classes from "./WeatherBar.module.scss";
import Location from "./current/Location";
import CurrentWeather from "./current/CurrentWeather";
import CurrentForecast from "./forecast/CurrentForecast";
import SunActivity from "./sunActivity/SunActivity";
import SearchBar from "../UI/SearchBar";
import icons from "../../assets/icons/icons.svg";
import { WEATHER_BACKGROUNDS } from "../../helpers/config";
import CurrentContext from "../../store/current-context";

const WeatherBar = () => {
  const currentWeather = useContext(CurrentContext).weather;
  const scrollHandler = () => {
    document.getElementById("dashboard").scrollIntoView({ behavior: "smooth" });
  };
  const codeToBackground =
    WEATHER_BACKGROUNDS.find((backgr) => backgr.code === currentWeather.code) ||
    "";
  const background = currentWeather.isDay
    ? codeToBackground.day
    : codeToBackground.night;

  return (
    <section
      className={classes.current}
      style={{
        backgroundImage: `linear-gradient(
      160deg,
      var(--color-grad-1-transparent) 50%,
      var(--color-grad-2-transparent)
      ),
      url(${background})`,
      }}
    >
      <SearchBar />
      <Location />
      <CurrentWeather />
      <CurrentForecast />
      <SunActivity />
      <button className={classes.current__btn} onClick={scrollHandler}>
        <svg>
          <use href={`${icons}#icon-arrow-down`}></use>
        </svg>
      </button>
    </section>
  );
};

export default WeatherBar;
