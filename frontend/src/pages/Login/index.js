import React from "react";

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
  return (
    <Container>
      <Main>
        <Logo src={logo} alt="logo" />
        <Form>
          <InputContainer>
            <Label>Nome:</Label>
            <Input id="name" type="text" />
          </InputContainer>

          <InputContainer id="container-password">
            <Label>Senha:</Label>
            <Input id="password" type="password" />
            <LabelForgotPassword href="./">
              esqueci minha senha
            </LabelForgotPassword>
          </InputContainer>

          <Button id="entrar">ENTRAR</Button>
          <Button id="voltar">VOLTAR</Button>
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
