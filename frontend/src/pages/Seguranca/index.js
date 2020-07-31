import React from "react";
import background_seguranca from "../../assets/background_seguranca.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
} from "./styles";

export default function Seguranca() {
  return (
    <Container>
      <Image src={background_seguranca} alt="background" />
      <FormularioContainer>
        <Formulario>
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <input type="text" />         
          </Formulario>
      </FormularioContainer>
    </Container>
  );
}