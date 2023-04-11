import React, { useCallback, useState } from "react";
import { PLACEHOLDER_FAVORITES } from "../helpers/config";

const FavoritesContext = React.createContext({
  favorites: [],
  getFavorites: () => {},
  addFavorite: (newFav) => {},
  removeFavorite: (favCityName, favCountryName) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const storedFavorites =
    localStorage.getItem("favorites") &&
    JSON.parse(localStorage.getItem("favorites"));

  const [favorites, setFavorites] = useState(
    storedFavorites || PLACEHOLDER_FAVORITES
  );

  const getFavorites = useCallback(() => {
    if (localStorage.getItem("favorites")) {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
      console.log(storedFavorites);
      setFavorites(storedFavorites);
    }
  }, []);

  const addFavorite = (newFav) => {
    setFavorites((prev) => {
      const newFavorites = [newFav, ...prev];
      console.log(newFavorites);

      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const removeFavorite = (favCityName, favCountryName) => {
    setFavorites((prev) => {
      const newFavorites = prev.filter((fav) => fav.city !== favCityName);
      //console.log(newFavorites);

      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        getFavorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
