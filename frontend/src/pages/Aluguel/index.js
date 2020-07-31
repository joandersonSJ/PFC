import React from "react";
import background_aluguel from "../../assets/background_aluguel.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
} from "./styles";

export default function Aluguel() {
  return (
    <Container>
      <Image src={background_aluguel} alt="background" />
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