import React from "react";
import background_almoxarifado from "../../assets/background_almoxarifado.png";
import logo from "../../assets/logo.svg";
import MenuDropDown from "../../components/menuDropDown";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
  Logo,
  ContainerHeader,
  Label,
} from "./styles";

export default function Almoxarifado() {
  return (
    <Container>
            <MenuDropDown active="almoxarifado" />
      <Image src={background_almoxarifado} alt="background" />
      <FormularioContainer>
                <ContainerHeader>
                     <Logo src={logo} alt="logo" />
                </ContainerHeader>
        <Formulario>
          <Label>Número do Pedido:</Label>
          <Input type="text" />
          <Label>Item:</Label>
          <Input type="text" />
          <Label>Unidade:</Label>
          <Input type="text" />
          <Label>Data:</Label>
          <Input type="text" />
          <Label>Valor do Pedido R$:</Label>
          <Input type="text" />
          <Label>Total dos Pedido R$:</Label>
          <Input type="text" />
          </Formulario>
      </FormularioContainer>
    </Container>
  );
}