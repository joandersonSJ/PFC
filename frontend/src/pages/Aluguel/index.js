import React from "react";
import background_aluguel from "../../assets/background_aluguel.png";
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

export default function Aluguel() {
  return (
    <Container>
      <MenuDropDown active="aluguel" />
      <Image src={background_aluguel} alt="background" />
      <FormularioContainer>
              <ContainerHeader>
                   <Logo src={logo} alt="logo" />
                </ContainerHeader>

        <Formulario>
          <Label>Id Aluguel:</Label>
          <Input type="text" />
          <Label>Unidade:</Label>
          <Input type="text" />          
          <Label>Data:</Label>
          <Input type="text" />
          <Label>Valor R$:</Label>
          <Input type="text" />
          <Label>Total Pago:</Label>
          <Input type="text" />
        </Formulario>
      </FormularioContainer>
    </Container>
  );
}