import React from "react";
import background_agua from "../../assets/background_agua.png";
import logo from "../../assets/logo.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
  Label,
  FooterFormulario,
  Button ,
  Logo,
  ContainerHeader,
} from "./styles";

export default function Agua() {
  return (
    <Container>
      <Image src={background_agua} alt="background" />
      <FormularioContainer>

      <ContainerHeader>
          <Logo src={logo} alt="logo" />
      </ContainerHeader>

        <Formulario>
          <Label>Registro:</Label>
          <Input type="text" />
          <Label>Unidade:</Label>
          <Input type="text" />
          <Label>Data:</Label>
          <Input type="text" />
          <Label>Valor R$:</Label>
          <Input type="text" />
          <Label>Total Pago R$:</Label>
          <Input type="text" />
          </Formulario>
          <FooterFormulario>
          <Button id="excluir">EXCLUIR</Button>
          <Button id="salvar">SALVAR</Button>
        </FooterFormulario>
      </FormularioContainer>
    </Container>
  );
}