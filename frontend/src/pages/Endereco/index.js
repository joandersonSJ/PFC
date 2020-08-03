import React from "react";
import background_endereco from "../../assets/background_endereco.svg";
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

export default function Endereco() {
  return (
    <Container>
      <MenuDropDown active="endereco" />
      <Image src={background_endereco} alt="background" />
      <FormularioContainer>
            <ContainerHeader>
               <Logo src={logo} alt="logo" />
            </ContainerHeader>


        <Formulario>
          
          <Label>Id_endereco:</Label>
          <Input type="text" />
          <Label>CEP:</Label>           
          <Input type="text" />
          <Label>Logradouro:</Label>
          <Input type="text" />
          <Label>Número:</Label>
          <Input type="text" />
          <Label>Complemento:</Label>
          <Input type="text" />
          <Label>Bairro :</Label>
          <Input type="text" />
          <Label>Cidade:</Label>
          <Input type="text" />
          <Label>Estado:</Label>
          <Input type="text" />          
        </Formulario>
      </FormularioContainer>
    </Container>
  );
}