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
          <Label>Município:</Label>
          <Input type="text" />
          <Label>Prefeito:</Label>
          <Input type="text" />
          <Label>Ano Mandato:</Label>
          <Input type="text" />
          <Label>Secretário:</Label>
          <Input type="text" />
          <Label> Secretaria R$:</Label>
          <Input type="text" /> 
          <Label>Unidade:</Label>
          <Input type="text" />
          <Label>Data:</Label>
          <Input type="text" />
          </Formulario>
      </FormularioContainer>
    </Container>
  );
}