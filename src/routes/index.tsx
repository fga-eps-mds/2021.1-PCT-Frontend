import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeScreen from "../Pages/HomeScreen";
import AboutUs from "../Pages/AboutUs";
import Results from "../Pages/Results";
import Keywords from "../Pages/Keywords";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={HomeScreen} />
    <Route path="/sobre-nos" component={AboutUs} />
    <Route path="/resultados/:searchTerm+" component={Results} />
    <Route path="/keywords" component={Keywords} />
  </Switch>
);

export default Routes;
