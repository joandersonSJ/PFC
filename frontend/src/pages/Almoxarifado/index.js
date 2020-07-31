import React from "react";
import background_almoxarifado from "../../assets/background_almoxarifado.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
} from "./styles";

export default function Almoxarifado() {
  return (
    <Container>
      <Image src={background_almoxarifado} alt="background" />
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