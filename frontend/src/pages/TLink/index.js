import React from "react";
import background_tlink from "../../assets/background_tlink.png";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
  Label,
} from "./styles";

export default function TLink() {
  return (
    <Container>
      <Image src={background_tlink} alt="background" />
      <FormularioContainer>
        <Formulario>
          <Label>Número do Contrato:</Label>
          <Input type="text" />
          <Label>Unidade:</Label>
          <Input type="text" />
          <Label>Mês:</Label>
          <Input type="text" />
          <Label>Valor R$:</Label>
          <Input type="text" />
          <Label> Total Pago R$:</Label>
          <Input type="text" />          
        </Formulario>
      </FormularioContainer>
    </Container>
  );
}