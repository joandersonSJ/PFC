import React from "react";
import background_malote from "../../assets/background_malote.svg";
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

export default function Malote() {
  return (
    <Container>
      <MenuDropDown active="malote" />
      <Image src={background_malote} alt="background" />
      <FormularioContainer>
      <ContainerHeader>
          <Logo src={logo} alt="logo" />
      </ContainerHeader>
        <Formulario>
          <Label>Número do Contrato:</Label>
          <Input type="text" />
          <Label>Unidade:</Label>
          <Input type="text" />
          <Label>Mês:</Label>
          <Input type="text" />
          <Label>Valor R$:</Label>
          <Input type="text" />
          <Label> Total Pago R$:</Label>
          <Input type="text" />          
        </Formulario>
      </FormularioContainer>
    </Container>
  );
}