import React from "react";
import background_funcionarios from "../../assets/background_funcionarios.png";
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

export default function Funcionarios() {
  return (
    <Container>
      <MenuDropDown active="funcionario" />
      <Image src={background_funcionarios} alt="background" /> { /\* Comentário \*/ }
      <FormularioContainer>
      <ContainerHeader>
          <Logo src={logo} alt="logo" />
      </ContainerHeader>
        <Formulario>
          <Label>Id_funcionario:</Label>
          <Input type="text" />
          <Label>Matricula:</Label>
          <Input type="text" />
          <Label>Unidade:</Label>
          <Input type="text" />
          <Label>Nome:</Label>
          <Input type="text" />
          <Label>RG:</Label>
          <Input type="text" />
          <Label>CPF:</Label>
          <Input type="text" />
          <Label>PIS/PASEP:</Label>
          <Input type="text" />
          <Label>Telefone 1:</Label>
          <Input type="text" />
          <Label>Telefone 2:</Label>
          <Input type="text" />
          <Label>Data Nascimento:</Label>
          <Input type="text" />
          <Label>Sexo:</Label>
          <Input type="text" />
          <Label>e-mail:</Label>
          <Input type="text" />
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
          <Label>Escolaridade:</Label>
          <Input type="text" />
          <Label>Cargo:</Label>
          <Input type="text" />
          <Label>Unidade:</Label>
          <Input type="text" />
          <Label>Farda:</Label>
          <Input type="text" />
          <Label>Situação Funcional:</Label>
          <Input type="text" />
          <Label>Vinculo:</Label>
          <Input type="text" />
          <Label>Data Vinculo:</Label>
          <Input type="text" />
          <Label>Serviço Desenvolvida:</Label>
          <Input type="text" />
        </Formulario>
      </FormularioContainer>
    </Container>
  );
}