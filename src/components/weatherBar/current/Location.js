import React, { useContext } from "react";
import classes from "./Location.module.scss";
import CurrentContext from "../../../store/current-context";
import icons from "../../../assets/icons/icons.svg";
import FavoritesContext from "../../../store/favorites-context";

const Location = () => {
  const location = useContext(CurrentContext).location;
  const isPinned = location.isPinned;
  const favoritesContext = useContext(FavoritesContext);
  const currentContext = useContext(CurrentContext);

  const toggleFavoriteHandler = () => {
    if (isPinned) {
      favoritesContext.removeFavorite(location.city, location.country);
      currentContext.toggleIsPinned();
    } else {
      favoritesContext.addFavorite({
        city: location.city,
        country: location.country,
      });
      currentContext.toggleIsPinned();
    }
  };

  return (
    <div className={classes.location}>
      <div className={classes.location__data}>
        <div className={classes.location__city}>
          {location.city}, {location.country}
        </div>
        <div className={classes.location__hour}>{location.hourString}</div>
      </div>
      <button
        className={classes.location__star}
        onClick={toggleFavoriteHandler}
      >
        <svg>
          <use
            href={`${icons}#${isPinned ? "icon-star-full" : "icon-star-empty"}`}
          ></use>
        </svg>
      </button>
    </div>
  );
};

export default Location;
