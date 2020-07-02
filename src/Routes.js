import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Base from "./components/Base";
import Home from "./components/Home";
import Doctor from "./components/Doctor";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/doctors" component={Doctor} exact></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
