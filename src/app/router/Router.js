import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../app";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/tip/:tipId" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
