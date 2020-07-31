import React from "react";
import background_fardamento from "../../assets/background_fardamento.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
} from "./styles";

export default function Fardamento() {
  return (
    <Container>
      <Image src={background_fardamento} alt="background" />
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