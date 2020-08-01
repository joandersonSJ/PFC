import React from "react";
import background_fardamento from "../../assets/background_fardamento.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
} from "./styles";

export default function Fardamento() {
  return (
    <Container>
      <Image src={background_fardamento} alt="background" />
      <FormularioContainer>
        <Formulario>
          <Label>Id_Farda:</Label>  /* chave Primaria da Tabela Farda*/
          <Input type="text" />
          <Label>Funcionário R$:</Label>  /*Funcionário*/ /* chave Primaria da Tabela Funcionario*/
          <Input type="text" />
          <Label>Unidade:</Label>    /*Unidade*/ /* chave Primaria da Tabela Unidade*/
          <Input type="text" />
          <Label>Modelo:</Label>     /* PP,M,G,GG,XG, XXG*/
          <Input type="text" />
          <Label>Quantidade:</Label>  /*quantidade*/
          <Label>PP</Label>      <Label>M</Label>     <Label>G</Label>      <Label>GG</Label>     <Label>XG</Label>     <Label>XXG</Label>     
          <Input type="text" />, <Input type="text" />,<Input type="text" />,<Input type="text" />,<Input type="text" />,<Input type="text" />
          <Label>Valor R$:</Label>    /* Preço Unitário*/
          <Input type="text" />
          <Label>Valor TotalR$:</Label>  /* Preço Total*/
          <Input type="text" />
          <Label>Data:</Label>       /* Data Atual*/
          <Input type="text" />
        </Formulario>
      </FormularioContainer>
    </Container>
  );
}