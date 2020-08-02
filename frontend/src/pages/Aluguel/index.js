import React from "react";
import background_aluguel from "../../assets/background_aluguel.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
  Label,
} from "./styles";

export default function Aluguel() {
  return (
    <Container>
      <Image src={background_aluguel} alt="background" />
      <FormularioContainer>
        <Formulario>
          <Label>Id Aluguel:</Label>
          <Input type="text" />
          <Label>Unidade:</Label>
          <Input type="text" />          
          <Label>Data:</Label>
          <Input type="text" />
          <Label>Valor R$:</Label>
          <Input type="text" />
          <Label>Total Pago:</Label>
          <Input type="text" />
        </Formulario>
      </FormularioContainer>
    </Container>
  );
}