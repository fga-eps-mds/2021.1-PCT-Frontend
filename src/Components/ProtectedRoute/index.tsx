import React from "react";
import { Redirect, Route, RouteProps } from "react-router";

export type ProtectedRouteProps = RouteProps;

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  ...routeProps
}) => {
  const isAuthenticated = localStorage.getItem("acessToken");

  if (isAuthenticated) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default ProtectedRoute;
