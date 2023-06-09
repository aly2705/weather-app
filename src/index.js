import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App.js";
import { CurrentContextProvider } from "./store/current-context";
import { FavoritesContextProvider } from "./store/favorites-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritesContextProvider>
    <CurrentContextProvider>
      <App />
    </CurrentContextProvider>
  </FavoritesContextProvider>
);

// Set property for real vh unit to avoid design breaks because of web sidebars
document.documentElement.style.setProperty(
  "--mobVh",
  `${window.innerHeight / 100}px`
);
