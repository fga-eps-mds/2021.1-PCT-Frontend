import React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import jwt_decode from "jwt-decode";

export type ProtectedRouteProps = RouteProps;

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  ...routeProps
}) => {
  const checkIfTokenIsValid = () => {
    const token = localStorage.getItem("acessToken");
    const userId = localStorage.getItem("userID");
    const accessDesc: any = jwt_decode(token || "");

    console.log("USER ID:", userId)
    console.log("TOKEN USER ID:", accessDesc["user_id"])
    return String(userId) === String(accessDesc["user_id"])
  }

  const isAuthenticated = checkIfTokenIsValid();

  if (isAuthenticated) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default ProtectedRoute;
