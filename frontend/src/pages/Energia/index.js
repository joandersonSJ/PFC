import React from "react";
import background_energia from "../../assets/background_energia.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
  Label,
} from "./styles";

export default function Energia() {
  return (
    <Container>
      <Image src={background_energia} alt="background" />
      <FormularioContainer>
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