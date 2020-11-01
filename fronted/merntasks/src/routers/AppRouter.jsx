import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import PrivateDashboardRouter from "./PrivateDashboardRouter";
// import PrivateRouter from "./PrivateRouter";
import PublicDashboardRouter from "./PublicDashboardRouter";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRouter path="/auth" Component={PublicDashboardRouter} />
        {/* <PrivateRouter path="/" exact Component={PrivateDashboardRouter} /> */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
