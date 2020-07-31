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
          <Input type="text" /> 
          Id_endereco int (5),
           Endereço varchar(100) NOT NULL,
           Complemento varchar (10) not null,
           Logradouro varchar (10) not null,
           CEP int (8) not null,
           Número int (5) not null,
           Bairro varchar (100) not null,
           Cidade varchar (100) not null,
           Estado varchar (100) not null,
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />          
        </Formulario>
      </FormularioContainer>
    </Container>
  );
}