import React from "react";
import background_convenio from "../../assets/background_convenio.svg";
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

export default function Convenio() {
  return (
    <Container>
      <MenuDropDown active="convenio" />
      <Image src={background_convenio} alt="background" />
      <FormularioContainer>
           <ContainerHeader>
              <Logo src={logo} alt="logo" />
           </ContainerHeader>

        <Formulario>
          <Label>Id Convênio:</Label>
          <Input type="text" />
          <Label>Unidade:</Label>
          <Input type="text" />
          <Label>Tipo Convênio:</Label>
          <Input type="text" />
          <Label>Custo R$:</Label>
          <Input type="text" />
          <Label>Data da assinatura:</Label>
          <Input type="text" />                
        </Formulario>
      </FormularioContainer>
    </Container>
  );
}