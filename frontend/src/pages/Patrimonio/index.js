import React from "react";
import background_patrimonio from "../../assets/background_patrimonio.svg";
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

export default function Patrimonio() {
  return (
    <Container>
      <MenuDropDown active="patrimonio" />
      <Image src={background_patrimonio} alt="background" />
      <FormularioContainer>
      <ContainerHeader>
          <Logo src={logo} alt="logo" />
      </ContainerHeader>
        <Formulario>
          <Label>ID_Patrimonio:</Label>
          <Input type="text" />
          <Label>Unidade:</Label>
          <Input type="text" />
          <Label>Nome do Item:</Label>
          <Input type="text" />
          <Label>Tombo:</Label>
          <Input type="text" />
          <Label>Condição do Item:</Label>
          <Input type="text" />
          <Label>Valor do Item R$:</Label>
          <Input type="text" />
          <Label> Total Geral R$:</Label>
          <Input type="text" />  
          <Label>Mês:</Label>
          <Input type="text" />
          </Formulario>
      </FormularioContainer>
    </Container>
  );
}