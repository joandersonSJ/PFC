import React from "react";
import background_regionais from "../../assets/background_regionais.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
} from "./styles";

export default function Regionais() {
  return (
    <Container>
      <Image src={background_regionais} alt="background" />
      <FormularioContainer>
        <Formulario>
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <input type="text" />
          <input type="text" />
          </Formulario>
      </FormularioContainer>
    </Container>
  );
}