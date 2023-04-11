import React, { useCallback, useContext, useState } from "react";
import FavoritesContext from "./favorites-context";

const initialWeather = {
  temperature: 10,
  code: 1000,
  condition: "Sunny",
  icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
  min: 0,
  max: 0,
  chanceOfRain: 0,
  feelsLike: 10,
  sunrise: "",
  sunset: "",
  isDay: 0,
};
const initialLocation = {
  city: "Location Not Found",
  country: "",
  localTime: new Date(),
  hourString: "",
  isPinned: false,
};

const CurrentContext = React.createContext({
  weather: initialWeather,
  location: initialLocation,
  forecast: {
    days: [],
    hours: [],
  },
  setCurrentData: (APIdata) => {},
  toggleIsPinned: () => {},
});

export const CurrentContextProvider = ({ children }) => {
  const favorites = useContext(FavoritesContext).favorites;
  const [weather, setWeather] = useState(initialWeather);
  const [location, setLocation] = useState(initialLocation);
  const [forecast, setForecast] = useState({});

  const setCurrentData = useCallback(
    (APIdata) => {
      const currentWeather = {
        temperature: APIdata.current.temp_c,
        code: APIdata.current.condition.code,
        condition: APIdata.current.condition.text,
        icon: APIdata.current.condition.icon,
        min: APIdata.forecast.forecastday.at(0).day.mintemp_c,
        max: APIdata.forecast.forecastday.at(0).day.maxtemp_c,
        chanceOfRain:
          APIdata.forecast.forecastday.at(0).day.daily_chance_of_rain,
        feelsLike: APIdata.current.feelslike_c,
        sunrise: APIdata.forecast.forecastday.at(0).astro.sunrise,
        sunset: APIdata.forecast.forecastday.at(0).astro.sunset,
        isDay: APIdata.current.is_day,
      };

      const currentLocation = {
        city: APIdata.location.name,
        country: APIdata.location.country,
        localTime: new Date(APIdata.location.localtime_epoch * 1000),
        hourString: APIdata.location.localtime.slice(-5),
        isPinned: !!favorites.filter(
          (fav) =>
            APIdata.location.name === fav.city &&
            APIdata.location.country === fav.country
        ).length,
      };

      const hoursForecastedToday = APIdata.forecast.forecastday
        .at(0)
        .hour.filter((hour) => {
          const currentHour = new Date().getHours();
          return currentHour <= new Date(hour.time_epoch * 1000).getHours();
        })
        .map((hour) => {
          return {
            time: hour.time,
            temperature: hour.temp_c,
            icon: hour.condition.icon,
            chanceOfRain: hour.chance_of_rain,
          };
        });

      const hoursForecastedTomorrow = APIdata.forecast.forecastday
        .at(1)
        .hour.filter((hour, i) => i < 24 - hoursForecastedToday.length)
        .map((hour) => {
          return {
            time: hour.time,
            temperature: hour.temp_c,
            icon: hour.condition.icon,
            chanceOfRain: hour.chance_of_rain,
          };
        });

      const dailyForecast = {
        days: APIdata.forecast.forecastday.map((day) => {
          return {
            time: new Date(day.date_epoch * 1000),
            icon: day.day.condition.icon,
            min: day.day.mintemp_c,
            max: day.day.maxtemp_c,
            chanceOfRain: day.day.daily_chance_of_rain,
          };
        }),
        hours: [...hoursForecastedToday, ...hoursForecastedTomorrow],
      };

      setWeather(currentWeather);
      setLocation(currentLocation);
      setForecast(dailyForecast);
    },
    [favorites]
  );

  const toggleIsPinned = () => {
    setLocation((prev) => {
      return { ...prev, isPinned: !prev.isPinned };
    });
  };

  return (
    <CurrentContext.Provider
      value={{
        weather,
        location,
        forecast,
        setCurrentData,
        toggleIsPinned,
      }}
    >
      {children}
    </CurrentContext.Provider>
  );
};

export default CurrentContext;
