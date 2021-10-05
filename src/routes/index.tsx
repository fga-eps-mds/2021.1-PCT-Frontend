import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeScreen from "../Pages/HomeScreen";
import AboutUs from "../Pages/AboutUs";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={HomeScreen} />
    <Route path="/sobreNos" component={AboutUs} />
  </Switch>
);

export default Routes;
