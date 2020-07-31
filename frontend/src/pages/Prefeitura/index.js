import React from "react";
import background_prefeitura from "../../assets/background_prefeitura.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
} from "./styles";

export default function Prefeitura() {
  return (
    <Container>
      <Image src={background_prefeitura} alt="background" />
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