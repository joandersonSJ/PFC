import React from "react";
import background_link from "../../assets/background_link.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
} from "./styles";

export default function Link() {
  return (
    <Container>
      <Image src={background_link} alt="background" />
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