import React, { useContext } from "react";
import classes from "./Location.module.scss";
import CurrentContext from "../../../store/current-context";
import icons from "../../../assets/icons/icons.svg";

const Location = () => {
  const location = useContext(CurrentContext).location;
  const iconStar = location.isPinned ? "icon-star-full" : "icon-star-empty";

  return (
    <div className={classes.location}>
      <div className={classes.location__data}>
        <div className={classes.location__city}>
          {location.city}, {location.country}
        </div>
        <div className={classes.location__hour}>{location.hourString}</div>
      </div>
      <button className={classes.location__star}>
        <svg>
          <use href={`${icons}#${iconStar}`}></use>
        </svg>
      </button>
    </div>
  );
};

export default Location;
