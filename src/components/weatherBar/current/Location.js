import React, { useContext } from "react";
import classes from "./Location.module.scss";
import CurrentContext from "../../../store/current-context";

const Location = () => {
  const location = useContext(CurrentContext).location;
  return (
    <div className={classes.location}>
      <div className={classes.location__city}>
        {location.city}, {location.country}
      </div>
      <div className={classes.location__hour}>{location.hourString}</div>
    </div>
  );
};

export default Location;
