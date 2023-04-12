// Placeholder data for the initial render of the page
export const initialWeather = {
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
export const initialLocation = {
  city: "Bucharest",
  country: "Romania",
  localTime: new Date(),
  hourString: "00:00",
  isPinned: false,
};
const initialHourForecast = {
  time: "2023-04-12 00:00",
  temperature: 9,
  icon: "//cdn.weatherapi.com/weather/64x64/night/122.png",
  chanceOfRain: 10,
};
const initialDayForecast = {
  time: new Date(2023, 3, 11),
  icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
  min: 5,
  max: 12,
  chanceOfRain: 10,
};
export const initialForecast = {
  days: [
    initialDayForecast,
    initialDayForecast,
    initialDayForecast,
    initialDayForecast,
  ],
  hours: [
    initialHourForecast,
    initialHourForecast,
    initialHourForecast,
    initialHourForecast,
  ],
};

export const initialFavorites = [
  {
    city: "Bucharest",
    country: "Romania",
  },
  {
    city: "Cluj-Napoca",
    country: "Romania",
  },
  {
    city: "Brasov",
    country: "Romania",
  },
];
