import React, { useEffect, useState } from "react";
import background_unidades from "../../assets/background_unidades.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
  Label,
} from "./styles";

export default function Cadastro() {
  const [municipios, setMunicipios] = useState([]);
  useEffect(() => {
    async function searchItem() {
      const municipios = await fetch(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/BA/municipios"
      );
      const municipios_in_json = await municipios.json();
      setMunicipios(municipios_in_json);
    }
    searchItem();
  }, []);

  return (
    <Container>
      <Image src={background_unidades} alt="background" />
      <FormularioContainer>
        <Formulario>
          <select>
            {municipios.map((municipio) => (
              <option value={municipio.nome}>{municipio.nome}</option>
            ))}
          </select>
          <Label>Código da Unidade:</Label>
          <Input type="text" />
          <Label>Inscricão do Ministério</Label>
          <Input type="text" />
          <Label>Municipio</Label>
          <Input type="text" />
          <Label>Nome da Unidade</Label>
          <Input type="text" />
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
          <Label>Coordenador</Label>
          <Input type="text" />
          <Label>e-mail</Label>
          <Input type="text" />
          <Label>Funcionario </Label>
          <Input type="text" />
          <Label>Prefeito</Label>
          <Input type="text" />
          <Label>Secretário</Label>
          <Input type="text" />
          <Label>Servicos</Label>
          <Input type="text" />  <Input type="text" />  <Input type="text" />  <Input type="text" />  <Input type="text" />  <Input type="text" />
          <Label>Imovel</Label>
          <Input type="text" />
          <Label>Tipo de Imovel</Label>
          <Input type="text" />
          <Label>Horario de Funcionamento</Label>
          <Input type="text" />
          <Label>Tipo de Unidade</Label> { /*Pequeno Porte, Medio Porte, Grande porte*/}
          <Input type="text" />
          <Label>Nota Técnica </Label>
          <Input type="text" />
          <Label>Convênio</Label>
          <Input type="text" />
          <Label>Regional</Label>
          <Input type="text" />
          <Label>Itens do Patrimonio </Label>
          <Input type="text" />
          <Label>Consumo R$</Label>
          <Input type="text" />
          <Label>Custo Materiais</Label>
          <Input type="text" />
          <Label>Segurança</Label>
          <Input type="text" />
          <Label>Almoxarifado</Label>
          <Input type="text" />
          <Label>Supervisor COPAT</Label>
          <Input type="text" />
          <Label>Supervisor COINSD</Label>
          <Input type="text" />
          <Label>Supervisor CORTRAD</Label>
          <Input type="text" />
          <Label>Data Ultima Visitatecnica</Label>
          <Input type="text" />
          <Label>Situação Funcional </Label>
          <Input type="text" />
          <Label>Data da Implantacao</Label>
          <Input type="text" />
          <Label>Malote</Label>
          <Input type="text" />
          <Label>Link </Label>
          <Input type="text" />
          <Label>Agua</Label>
          <Input type="text" />
          <Label>Planta Baixa</Label>
          <Input type="text" />
          <Label>Ultimo Usuario</Label> {/*LOG*/}
          <Input type="text" />
          <Label>Custoservico R$</Label>
          <Input type="text" />
          <Label>Custo Mensal da Unidade R$</Label>
          <Input type="text" />
          <Label>Custo Anual da Unidade R$</Label>
          <Input type="text" />
        </Formulario>
      </FormularioContainer>
    </Container>
  );
}
