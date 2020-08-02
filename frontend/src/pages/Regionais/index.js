import React from "react";
import background_regionais from "../../assets/background_regionais.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
  Label,
} from "./styles";

export default function Regionais() {
  return (
    <Container>
      <Image src={background_regionais} alt="background" />
      <FormularioContainer>
        <Formulario>
          <Label>Código da Regional:</Label>
          <Input type="text" />
          <Label>Nome:</Label>
          <Input type="text" />
          <Label>Codigo Unidade:</Label>
          <Input type="text" />
          <Label>Coordenador:</Label>
          <Input type="text" />
          <Label>Data:</Label>
          <input type="text" />
        </Formulario>
      </FormularioContainer>
    </Container>
  );
}