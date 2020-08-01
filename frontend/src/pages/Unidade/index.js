import React, { useEffect, useState } from "react";
import background_unidades from "../../assets/background_unidades.svg";

import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
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
  }, [municipios]);

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
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
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
