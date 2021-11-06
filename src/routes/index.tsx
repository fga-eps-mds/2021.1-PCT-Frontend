import React from "react";
import { Switch, Route } from "react-router-dom";

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
  const isLoggedIn = localStorage.getItem("@user");

  return (
    <Switch>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/login" exact component={Login} />
      {/* Exemplo isLoggedIn: {isLoggedIn && <Route path="/login" component={Login} />} */}
      <Route path="/cadastro" exact component={SignUp} />
      <Route path="/admin" exact component={Admin} />
      <Route path="/sobre-nos" exact component={AboutUs} />
      <Route path="/resultados/:searchTerm+" component={Results} />
      <Route path="/expressoes" exact component={Keywords} />
      <Route path="/fontes" exact component={Sources} />
      <Route
        path="/fontes/:sourceID/monitoramento"
        exact
        component={Monitoring}
      />
    </Switch>
  );
};

export default Routes;
