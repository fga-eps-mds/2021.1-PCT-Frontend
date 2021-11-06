import React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import userIsAuthenticated from "../../utils/userAuthentication";

export type ProtectedRouteProps = RouteProps;

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  ...routeProps
}) => {
  const isAuthenticated = userIsAuthenticated();

  if (isAuthenticated) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default ProtectedRoute;
