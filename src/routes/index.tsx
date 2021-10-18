import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeScreen from "../Pages/HomeScreen";
import AboutUs from "../Pages/AboutUs";
import Results from "../Pages/Results";
import Login from "../Pages/Login";

const Routes: React.FC = () => {

  const isLoggedIn = localStorage.getItem('@user');

  return (
    <Switch>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/sobreNos" component={AboutUs} />
      <Route path="/resultados/:searchTerm+" component={Results} />
      <Route path="/login" component={Login} />
      {/* Exemplo isLoggedIn: {isLoggedIn && <Route path="/login" component={Login} />} */}
    </Switch>
  );
};

export default Routes;
