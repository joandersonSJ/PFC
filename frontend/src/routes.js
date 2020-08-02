import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Unidade from "./pages/Unidade";
import Agua from "./pages/Agua";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/agua/cadastro" component={Agua} />
        <Route path="/unidade/cadastro" component={Unidade} />       
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
