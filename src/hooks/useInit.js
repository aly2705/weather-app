import { useCallback, useEffect, useContext, useRef } from "react";
import useHTTP from "./useHTTP";
import { API_KEY } from "../helpers/config";
import CurrentContext from "../store/current-context";

const useInit = () => {
  const { sendRequest } = useHTTP();
  const currentContext = useRef(useContext(CurrentContext));

  const process = useCallback((data) => {
    currentContext.current.setCurrentData(data);
    console.log("Set data in context");
    console.log(data);
  }, []);

  const successfulGeolocation = useCallback(
    (position) => {
      const { latitude, longitude } = position.coords;
      const coords = [latitude, longitude];
      const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${coords.join(
        ","
      )}&days=3`;
      sendRequest(url, process);
    },
    [sendRequest, process]
  );
  const errorGeolocation = useCallback(() => {
    console.log("Couldn't get the current position!");
  }, []);

  useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        successfulGeolocation,
        errorGeolocation
      );
  }, [successfulGeolocation, errorGeolocation]);
};

export default useInit;
