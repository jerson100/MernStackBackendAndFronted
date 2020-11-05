import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import NotificationProvider from "../components/Notification/NotificationProvider";
import AuthProvider from "../providers/AuthProvider";
import PrivateDashboardRouter from "./PrivateDashboardRouter";
import PrivateRouter from "./PrivateRouter";
import PublicDashboardRouter from "./PublicDashboardRouter";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <Switch>
            <PublicRouter path="/auth" Component={PublicDashboardRouter} />
            <PrivateRouter path="/" Component={PrivateDashboardRouter} />
          </Switch>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
};

export default AppRouter;
