import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeScreen from "../Pages/HomeScreen";
import AboutUs from "../Pages/AboutUs";
import Results from "../Pages/Results";
import Monitoring from "../Pages/Monitoring";
import Keywords from "../Pages/Keywords";
import Sources from "../Pages/Sources";

const Routes: React.FC = () => (
    <Switch>
    <Route path="/" exact component={HomeScreen} />
    <Route path="/sobre-nos" exact component={AboutUs} />
    <Route path="/resultados/:searchTerm+" component={Results} />
    <Route path="/monitoramento" exact component={Monitoring} />
    <Route path="/keywords" exact component={Keywords} />
    <Route path="/sources" exact component={Sources} />
  </Switch>
);

export default Routes;
