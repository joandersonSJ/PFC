import React from "react";
import background_regionais from "../../assets/background_regionais.png";
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

export default function Regionais(){
  return (
    <Container>
      <MenuDropDown active="regional" />
      <Image src={background_regionais} alt="background" />
      <FormularioContainer>
      <ContainerHeader>
          <Logo src={logo} alt="logo" />
      </ContainerHeader>
        <Formulario>
          <Label>Código da Regional:</Label>
          <Input type="text" />
          <Label>Nome:</Label>
          <Input type="text" />
          <Label>Codigo Unidade:</Label>
          <Input type="text" />
          <Label>Coordenador:</Label>
          <Input type="text" />
          <Label>Data:</Label>
          <input type="text" />
        </Formulario>
      </FormularioContainer>
    </Container>
  );
}