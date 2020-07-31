import React from "react";
import background_energia from "../../assets/background_energia.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
} from "./styles";

export default function Energia() {
  return (
    <Container>
      <Image src={background_energia} alt="background" />
      <FormularioContainer>
        <Formulario>
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          </Formulario>
      </FormularioContainer>
    </Container>
  );
}