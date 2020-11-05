import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen/HomeScreen";

const PrivateDashboardRouter = () => {
  return (
    <Switch>
      <Route path="/home" component={HomeScreen} />
      <Route path="/" component={HomeScreen} />
    </Switch>
  );
};

export default PrivateDashboardRouter;
