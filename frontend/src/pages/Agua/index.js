import React from "react";
import background_agua from "../../assets/background_agua.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
} from "./styles";

export default function Agua() {
  return (
    <Container>
      <Image src={background_agua} alt="background" />
      <FormularioContainer>
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
      </FormularioContainer>
    </Container>
  );
}