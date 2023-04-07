import React from "react";
import classes from "./Dashboard.module.scss";
import Header from "./header/Header";
import Favorites from "./favorites/Favorites";
import Forecast from "./forecast/Forecast";

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <Header />
      <Favorites />
      <Forecast />
    </div>
  );
};

export default Dashboard;
