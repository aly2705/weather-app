import React, { useCallback, useState } from "react";

const CurrentContext = React.createContext({
  weather: {
    temperature: 0,
    condition: "",
    icon: "",
    min: 0,
    max: 0,
    chanceOfRain: 0,
    feelsLike: 0,
    sunrise: "",
    sunset: "",
    isDay: 0,
    hours: [],
  },
  location: {
    city: "",
    country: "",
    localTime: new Date(),
    hourString: "",
  },
  forecast: {
    days: [],
  },
  setCurrentData: (APIdata) => {},
});

export const CurrentContextProvider = (props) => {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});
  const [forecast, setForecast] = useState({});

  const setCurrentData = useCallback((APIdata) => {
    const currentWeather = {
      temperature: APIdata.current.temp_c,
      condition: APIdata.current.condition.text,
      icon: APIdata.current.condition.icon,
      min: APIdata.forecast.forecastday.at(0).day.mintemp_c,
      max: APIdata.forecast.forecastday.at(0).day.maxtemp_c,
      chanceOfRain: APIdata.forecast.forecastday.at(0).day.daily_chance_of_rain,
      feelsLike: APIdata.current.feelslike_c,
      sunrise: APIdata.forecast.forecastday.at(0).astro.sunrise,
      sunset: APIdata.forecast.forecastday.at(0).astro.sunset,
      isDay: APIdata.current.is_day,
      hours: APIdata.forecast.forecastday.at(0).hour.map((hour) => {
        return {
          time: hour.time,
          temperature: hour.temp_c,
          icon: hour.condition.icon,
          chanceOfRain: hour.chance_of_rain,
        };
      }),
    };
    const currentLocation = {
      city: APIdata.location.region,
      country: APIdata.location.country,
      localTime: new Date(APIdata.location.localtime_epoch * 1000),
      hourString: APIdata.location.localtime.slice(-5),
    };

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
    };
    console.log(currentWeather);
    console.log(currentLocation);
    console.log(dailyForecast);

    setWeather(currentWeather);
    setLocation(currentLocation);
    setForecast(dailyForecast);
  }, []);

  return (
    <CurrentContext.Provider
      value={{
        weather,
        location,
        forecast,
        setCurrentData,
      }}
    >
      {props.children}
    </CurrentContext.Provider>
  );
};

export default CurrentContext;
