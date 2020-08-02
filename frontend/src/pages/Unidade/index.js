import React, { useEffect, useState } from "react";
import background_unidades from "../../assets/background_unidades.svg";
import logo from "../../assets/logo.svg";
import { api } from "../../services/api";
import {
  Container,
  Image,
  FormularioContainer,
  Formulario,
  Input,
  SelectMunicipios,
  ContainerHeader,
  Logo,
  FooterFormulario,
  Button,
} from "./styles";

export default function Cadastro() {
  const [municipios, setMunicipios] = useState([]);
  const [municipioSelect, setMunicipioSelect] = useState("Abaíra");

  useEffect(() => {
    async function searchItem() {
      const municipios = await api.get(
        "api/v1/localidades/estados/BA/municipios"
      );
      console.log(municipioSelect);
      setMunicipios(municipios.data);
    }
    searchItem();
  }, [municipioSelect]);

  return (
    <Container>
      <Image src={background_unidades} alt="background" />
      <FormularioContainer>
        <ContainerHeader>
          <Logo src={logo} alt="logo" />
          <SelectMunicipios
            onChange={(evento) => setMunicipioSelect(evento.target.value)}
            value={municipioSelect}
          >
            {municipios.map((municipio) => (
              <option value={municipio.nome} key={municipio.id}>
                {municipio.nome}
              </option>
            ))}
          </SelectMunicipios>
        </ContainerHeader>
        <Formulario>
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
        <FooterFormulario>
          <Button id="excluir">EXCLUIR</Button>
          <Button id="salvar">SALVAR</Button>
        </FooterFormulario>
      </FormularioContainer>
    </Container>
  );
}
