/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import {
  useNotifySucess,
  useNotifyWarning,
  useNotifyError,
} from "../../hooks/showResponse";
import { useHistory } from "react-router-dom";

import background_login from "../../assets/background-login.svg";
import logo from "../../assets/logo.svg";

import {
  Container,
  Main,
  Logo,
  Form,
  InputContainer,
  Label,
  Input,
  Button,
  Background,
  Paragrafo,
  LabelForgotPassword,
} from "./styles";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = (evento) => {
    evento.preventDefault();
    if (name === "" || password === "") {
      return useNotifyWarning();
    }

    if (name !== "admin" || password !== "admin") {
      setName("");
      setPassword("");
      return useNotifyError();
    }
    // Gambiarra abaixo
    useNotifySucess();
    setTimeout(() => {
      return history.push("dashboard");
    }, 3200);
    // Gambiarra acima
  };

  return (
    <Container>
      <Main>
        <Logo src={logo} alt="logo"/>
        <Form>
          <InputContainer>
            <Label htmlFor="name">Nome:</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(evento) => setName(evento.target.value)}
            />
          </InputContainer>

          <InputContainer id="container-password">
            <Label htmlFor="password">Senha:</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(evento) => setPassword(evento.target.value)}
            />
            <LabelForgotPassword href="./">
              esqueci minha senha
            </LabelForgotPassword>
          </InputContainer>

          <Button onClick={handleLogin} id="entrar">
            ENTRAR
          </Button>
          <Button onClick={() => {}} id="voltar">
            VOLTAR
          </Button>
        </Form>
        <Paragrafo>Copyright ©2020 All rights reserved</Paragrafo>
      </Main>
      <aside>
        <Background src={background_login} alt="background_login" />
      </aside>
    </Container>
  );
}

export default Login;
