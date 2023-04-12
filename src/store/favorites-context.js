import React, { useState } from "react";
import { initialFavorites } from "../helpers/templatePlaceholders";

const FavoritesContext = React.createContext({
  favorites: [],
  addFavorite: (newFav) => {},
  removeFavorite: (favCityName, favCountryName) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const storedFavorites =
    localStorage.getItem("favorites") &&
    JSON.parse(localStorage.getItem("favorites"));

  const [favorites, setFavorites] = useState(
    storedFavorites || initialFavorites
  );

  const addFavorite = (newFav) => {
    setFavorites((prev) => {
      const newFavorites = [newFav, ...prev];

      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const removeFavorite = (favCityName, favCountryName) => {
    setFavorites((prev) => {
      const newFavorites = prev.filter((fav) => fav.city !== favCityName);

      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
