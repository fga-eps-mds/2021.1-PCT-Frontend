import React from "react";
import { Switch, Route } from "react-router-dom";

import ProtectedRoute from "../Components/ProtectedRoute";

import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Admin from "../Pages/Admin";
import HomeScreen from "../Pages/HomeScreen";
import AboutUs from "../Pages/AboutUs";
import Results from "../Pages/Results";
import Monitoring from "../Pages/Monitoring";
import Keywords from "../Pages/Keywords";
import Sources from "../Pages/Sources";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/login" exact component={Login} />
      {/* <Route path="/cadastro" exact component={SignUp} /> */}
      <ProtectedRoute path="/admin" exact component={Admin} />
      <ProtectedRoute path="/expressoes" exact component={Keywords} />
      <ProtectedRoute path="/fontes" exact component={Sources} />
      <Route path="/sobre-nos" exact component={AboutUs} />
      <Route path="/resultados/:searchTerm+" component={Results} />
      <Route
        path="/fontes/:sourceID/monitoramento"
        exact
        component={Monitoring}
      />
    </Switch>
  );
};

export default Routes;
