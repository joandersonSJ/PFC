import React from "react";
import background_convenio from "../../assets/background_convenio.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
} from "./styles";

export default function Convenio() {
  return (
    <Container>
      <Image src={background_convenio} alt="background" />
      <FormularioContainer>
        <Formulario>
          <Label>Id Convênio:</Label>
          <Input type="text" />
          <Label>Unidade:</Label>
          <Input type="text" />
          <Label>Tipo Convênio:</Label>
          <Input type="text" />
          <Label>Custo R$:</Label>
          <Input type="text" />
          <Label>Data da assinatura:</Label>
          <Input type="text" />                
        </Formulario>
      </FormularioContainer>
    </Container>
  );
}