import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Unidade from "./pages/Unidade";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Agua from "./pages/Agua";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/unidade/cadastro" component={Unidade} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/agua" component={Agua} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
