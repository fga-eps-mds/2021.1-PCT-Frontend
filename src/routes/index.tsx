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
    <Route path="/fontes/monitoramento" exact component={Monitoring} />
    <Route path="/expressoes" exact component={Keywords} />
    <Route path="/fontes" exact component={Sources} />
  </Switch>
);

export default Routes;
