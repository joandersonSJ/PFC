import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Unidade from "./pages/Unidade";
import Agua from "./pages/Agua";
import Almoxarifado from "./pages/Almoxarifado";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Aluguel from "./pages/Aluguel";
import Cadastro from "./pages/Cadastro";
import Convenio from "./pages/Convenio";
import Endereco from "./pages/Endereco";
import Energia from "./pages/Energia";
import Fardamento from "./pages/Fardamento";
import Funcionarios from "./pages/Funcionarios";
import TLink from "./pages/TLink";
import Malote from "./pages/Malote";
import Patrimonio from "./pages/Patrimonio";
import Prefeitura from "./pages/Prefeitura";
import Regionais from "./pages/Regionais";
import Seguranca from "./pages/Seguranca";
import Servicos from "./pages/Servicos";
import Telefone from "./pages/Telefone";



function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/agua/cadastro" component={Agua} />
        <Route path="/almoxarifado" component={Almoxarifado} />
        <Route path="/unidade/cadastro" component={Unidade} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/aluguel" component={Aluguel} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/convenio" component={Convenio} />
        <Route path="/endereco" component={Endereco} />
        <Route path="/energia" component={Energia} />
        <Route path="/fardamento" component={Fardamento} />
        <Route path="/funcionarios" component={Funcionarios} />
        <Route path="/tlink" component={TLink} />
        <Route path="/malote" component={Malote} />
        <Route path="/patrimonio" component={Patrimonio} />
        <Route path="/prefeitura" component={Prefeitura} />
        <Route path="/regionais" component={Regionais} />
        <Route path="/seguranca" component={Seguranca} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/telefone" component={Telefone} />
        <Route path="/cadastro" component={Cadastro} />         
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
