import React from "react";
import background_telefone from "../../assets/background_telefone.png";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
  Label,
} from "./styles";

export default function Telefone() {
  return (
    <Container>
      <Image src={background_telefone} alt="background" />
      <FormularioContainer>
        <Formulario>
          <Label>Número do Contrato:</Label>
          <Input type="text" />
          <Label>Número Telefone:</Label>
          <Input type="text" />
          <Label>Unidade:</Label>
          <Input type="text" />
          <Label>Data:</Label>
          <Input type="text" />
          <Label>Valor R$:</Label>
          <Input type="text" />
          <Label> Total Pago R$:</Label>
          </Formulario>
      </FormularioContainer>
    </Container>
  );
}