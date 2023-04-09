import React from "react";
import classes from "./Dashboard.module.scss";
import Header from "./header/Header";
import Favorites from "./favorites/Favorites";
import Forecast from "./forecast/Forecast";

const Dashboard = () => {
  return (
    <section className={classes.dashboard} id="dashboard">
      <Header />
      <Favorites />
      <Forecast />
    </section>
  );
};

export default Dashboard;
