import React, { useCallback, useState } from "react";

const CurrentContext = React.createContext({
  weather: {},
  location: {},
  setCurrentData: (APIdata) => {},
});

export const CurrentContextProvider = (props) => {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});

  const setCurrentData = useCallback((APIdata) => {
    setWeather(APIdata.current);
    setLocation(APIdata.location);
  }, []);

  return (
    <CurrentContext.Provider
      value={{
        weather,
        location,
        setCurrentData,
      }}
    >
      {props.children}
    </CurrentContext.Provider>
  );
};

export default CurrentContext;
