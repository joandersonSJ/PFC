import React from "react";
import background_telefone from "../../assets/background_telefone.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
} from "./styles";

export default function Telefone() {
  return (
    <Container>
      <Image src={background_telefone} alt="background" />
      <FormularioContainer>
        <Formulario>
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          </Formulario>
      </FormularioContainer>
    </Container>
  );
}