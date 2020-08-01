import React from "react";
import background_servicos from "../../assets/background_almoxarifado.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
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