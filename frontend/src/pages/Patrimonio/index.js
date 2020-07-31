import React from "react";
import background_patrimonio from "../../assets/background_patrimonio.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
} from "./styles";

export default function Patrimonio() {
  return (
    <Container>
      <Image src={background_patrimonio} alt="background" />
      <FormularioContainer>
        <Formulario>
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <input type="text" />
          <input type ="text" />
          </Formulario>
      </FormularioContainer>
    </Container>
  );
}