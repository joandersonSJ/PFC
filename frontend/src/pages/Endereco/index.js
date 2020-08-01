import React from "react";
import background_endereco from "../../assets/background_endereco.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
} from "./styles";

export default function Endereco() {
  return (
    <Container>
      <Image src={background_endereco} alt="background" />
      <FormularioContainer>
        <Formulario>
          
          <Label>Id_endereco:</Label>
          <Input type="text" />
          <Label>CEP:</Label>           
          <Input type="text" />
          <Label>Logradouro:</Label>
          <Input type="text" />
          <Label>Número:</Label>
          <Input type="text" />
          <Label>Complemento:</Label>
          <Input type="text" />
          <Label>Bairro :</Label>
          <Input type="text" />
          <Label>Cidade:</Label>
          <Input type="text" />
          <Label>Estado:</Label>
          <Input type="text" />          
        </Formulario>
      </FormularioContainer>
    </Container>
  );
}