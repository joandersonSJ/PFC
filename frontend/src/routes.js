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
        <Route path="/almoxarifado/cadastro" component={Almoxarifado} />
        <Route path="/unidade/cadastro" component={Unidade} />
        <Route path="/dashboard/cadastro" component={Dashboard} />
        <Route path="/aluguel/cadastro" component={Aluguel} />
        <Route path="/cadastro/cadastro" component={Cadastro} />
        <Route path="/convenio/cadastro" component={Convenio} />
        <Route path="/endereco/cadastro" component={Endereco} />
        <Route path="/energia/cadastro" component={Energia} />
        <Route path="/fardamento/cadastro" component={Fardamento} />
        <Route path="/funcionarios/cadastro" component={Funcionarios} />
        <Route path="/tlink/cadastro" component={TLink} />
        <Route path="/malote/cadastro" component={Malote} />
        <Route path="/patrimonio/cadastro" component={Patrimonio} />
        <Route path="/prefeitura/cadastro" component={Prefeitura} />
        <Route path="/regionais/cadastro" component={Regionais} />
        <Route path="/seguranca/cadastro" component={Seguranca} />
        <Route path="/servicos/cadastro" component={Servicos} />
        <Route path="/telefone/cadastro" component={Telefone} />
        <Route path="/cadastro/cadastro" component={Cadastro} />         
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
