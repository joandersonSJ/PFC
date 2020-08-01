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