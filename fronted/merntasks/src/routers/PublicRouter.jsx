import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRouter = ({ path, Component }) => {
  const user = false;
  return !user ? (
    <Route path={path} component={Component} />
  ) : (
    <Redirect to="/" />
  );
};

export default PublicRouter;
