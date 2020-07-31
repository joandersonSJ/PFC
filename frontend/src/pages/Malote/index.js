import React from "react";
import background_malote from "../../assets/background_malote.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
} from "./styles";

export default function Malote() {
  return (
    <Container>
      <Image src={background_malote} alt="background" />
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