import React from "react";
import background_servicos from "../../assets/background_servicos.png";
import logo from "../../assets/logo.svg";
import MenuDropDown from "../../components/menuDropDown";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
  Label,
  ContainerHeader,
  Logo,
} from "./styles";

export default function Servicos() {
  return (
    <Container>
      <MenuDropDown active="servico" />
      <Image src={background_servicos} alt="background" />
      <FormularioContainer>
      <ContainerHeader>
          <Logo src={logo} alt="logo" />
      </ContainerHeader>
        <Formulario>
          <Label>Código Serviço:</Label>
          <Input type="text" />
          <Label>Nome:</Label>
        </Formulario>
      </FormularioContainer>
    </Container>
  );
}