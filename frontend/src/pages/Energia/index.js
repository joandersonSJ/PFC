import React from "react";
import background_energia from "../../assets/background_energia.svg";
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

export default function Energia() {
  return (
    <Container>
      <MenuDropDown active="energia" />
      <Image src={background_energia} alt="background" />
      <FormularioContainer>

      <ContainerHeader>
          <Logo src={logo} alt="logo" />
      </ContainerHeader>
      
        <Formulario>
          <Label>Número Contrato:</Label>
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