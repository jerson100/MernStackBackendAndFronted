import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const PrivateRouter = ({ path, Component }) => {
  const { user } = useAuthContext();
  return user.isLogued ? (
    <Route path={path} component={Component} />
  ) : (
    <Redirect to="/auth/login" />
  );
};

export default PrivateRouter;
