import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "../pages/LoginScreen/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen/RegisterScreen";

const PublicDashboardRouter = () => {
  console.log("Public DashBoard");
  return (
    <Switch>
      <Route path="/auth/login" exact component={LoginScreen} />
      <Route path="/auth/register" exact component={RegisterScreen} />
      <Redirect to="/auth/login" />
    </Switch>
  );
};

export default PublicDashboardRouter;
