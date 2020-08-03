import React from "react";
import background_servicos from "../../assets/background_servicos.png";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
  Label,
} from "./styles";

export default function Servicos() {
  return (
    <Container>
      <Image src={background_servicos} alt="background" />
      <FormularioContainer>
        <Formulario>
          <Label>Código Serviço:</Label>
          <Input type="text" />
          <Label>Nome:</Label>
        </Formulario>
      </FormularioContainer>
    </Container>
  );
}