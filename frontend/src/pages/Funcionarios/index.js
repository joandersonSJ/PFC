import React from "react";
import background_funcionarios from "../../assets/background_funcionarios.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
} from "./styles";

export default function Funcionarios() {
  return (
    <Container>
      <Image src={background_funcionarios} alt="background" />
      <FormularioContainer>
        <Formulario>
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
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