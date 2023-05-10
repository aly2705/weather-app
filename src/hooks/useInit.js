import { useCallback, useEffect, useContext, useRef } from "react";
import useHTTP from "./useHTTP";
import { API_KEY, API_URL } from "../helpers/config";
import CurrentContext from "../store/current-context";
//import FavoritesContext from "../store/favorites-context";

const useInit = () => {
  const { sendRequest, error, setError, isLoading } = useHTTP();
  const currentContext = useRef(useContext(CurrentContext));
  //const favoritesContext = useRef(useContext(FavoritesContext));

  const process = useCallback((data) => {
    currentContext.current.setCurrentData(data);
  }, []);

  const successfulGeolocation = useCallback(
    (position) => {
      const { latitude, longitude } = position.coords;
      const coords = [latitude, longitude];
      const url = `${API_URL}/forecast.json?key=${API_KEY}&q=${coords.join(
        ","
      )}&days=3`;

      sendRequest(url, process);
    },
    [sendRequest, process]
  );
  const errorGeolocation = useCallback(() => {
    setError("Couldn't get the current position");
  }, [setError]);

  useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        successfulGeolocation,
        errorGeolocation
      );
  }, [successfulGeolocation, errorGeolocation]);

  return { error, isLoading };
};

export default useInit;
