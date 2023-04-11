import React, { useContext, useEffect, useState, useRef } from "react";
import classes from "./Pin.module.scss";
import useHTTP from "../../../hooks/useHTTP";
import { API_KEY, API_URL } from "../../../helpers/config";
import CurrentContext from "../../../store/current-context";

const Pin = ({ pin: pinProp }) => {
  const { sendRequest } = useHTTP();
  const [pin, setPin] = useState(pinProp);
  const currentContext = useContext(CurrentContext);
  const mainContainerRef = useRef(document.querySelector("main"));

  // Logic for initializing data for pin cards
  const processPinData = (data) => {
    const pinData = {
      city: data.location.name,
      country: data.location.country,
      temperature: data.current.temp_c,
      icon: data.current.condition.icon,
      condition: data.current.condition.text,
    };
    setPin(pinData);
  };
  useEffect(() => {
    sendRequest(
      `${API_URL}/current.json?key=${API_KEY}&q=${pinProp.city}`,
      processPinData
    );
  }, [pinProp, sendRequest]);

  // Handlers for click on pin to be displayed as current location
  const processNewData = (data) => {
    currentContext.setCurrentData(data);

    // To position the page in the beginning on mobile
    mainContainerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const loadPinDataHandler = () => {
    const url = `${API_URL}/forecast.json?key=${API_KEY}&q=${pin.city}&days=4`;
    sendRequest(url, processNewData);
  };

  return (
    <div className={classes.pin} onClick={loadPinDataHandler}>
      <h3>
        {pin.city}, {pin.country}
      </h3>
      <figure>
        <img src={pin.icon} alt="Weather Icon" />
        <figcaption>
          {pin.temperature}
          <span>°C</span>
        </figcaption>
      </figure>
      <p>{pin.condition}</p>
    </div>
  );
};

export default Pin;
