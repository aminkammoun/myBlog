import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Main from "./components/main";

import Details from "./components/Details";

export default function routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </Router>
  );
}
