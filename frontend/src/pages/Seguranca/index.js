import React from "react";
import background_seguranca from "../../assets/background_seguranca.png";
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

export default function Seguranca() {
  return (
    <Container>
      <MenuDropDown active="seguranca" />
      <Image src={background_seguranca} alt="background" />
      <FormularioContainer>
      <ContainerHeader>
          <Logo src={logo} alt="logo" />
      </ContainerHeader>
        <Formulario>
        <Label>Número Contrato:</Label>
          <Input type="text" />
          <Label>Unidade:</Label>
          <Input type="text" />
          <Label>Quantidade:</Label>
          <Input type="text" />
          <Label>Tipo:</Label>
          <Input type="text" />
          <Label>Data:</Label>
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