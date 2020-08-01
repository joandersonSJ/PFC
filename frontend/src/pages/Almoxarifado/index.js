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
          <Label>Número do Pedido:</Label>
          <Input type="text" />
          <Label>Item:</Label>
          <Input type="text" />
          <Label>Unidade:</Label>
          <Input type="text" />
          <Label>Data:</Label>
          <Input type="text" />
          <Label>Valor do Pedido R$:</Label>
          <Input type="text" />
          <Label>Total dos Pedido R$:</Label>
          <Input type="text" />
          </Formulario>
      </FormularioContainer>
    </Container>
  );
}