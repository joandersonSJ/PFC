/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useVerifyHasSession } from "../../hooks/verifyIfHasSession";
import { toast } from "react-toastify";
import background_unidades from "../../assets/background_unidades.svg";
import MenuDropDown from "../../components/menuDropDown";
import { api, apiBackend } from "../../services/api";
import logo from "../../assets/logo.svg";
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
  Label,
} from "./styles";

export default function Cadastro() {
  const history = useHistory();
  const verifyHasSession = useVerifyHasSession();

  useEffect(() => {
    if (!verifyHasSession) {
      history.push("/");
    }
  }, [history, verifyHasSession]);

  const [municipios, setMunicipios] = useState([]);
  const [municipioSelect, setMunicipioSelect] = useState("Abaíra");
  const [inscricao_mte, setInscricao_mte] = useState("");
  const [nome_unidade, setNome_unidade] = useState("");
  const [sec_pasta, setSec_pasta] = useState("");
  const [servicos, setServicos] = useState("");
  const [imovel, setImovel] = useState("");
  const [tipo_imovel, setTipo_imovel] = useState("");
  const [tipo_unidade, setTipo_unidade] = useState("");

  useEffect(() => {
    async function searchItem() {
      const municipios = await api.get(
        "api/v1/localidades/estados/BA/municipios"
      );
      setMunicipios(municipios.data);
    }
    searchItem();
  }, []);

  async function handleAddUnity(evento) {
    evento.preventDefault();
    const { status } = await apiBackend.post("cadastro/unidade", {
      // municipios,
      // municipioSelect,
      inscricao_mte,
      nome_unidade,
      sec_pasta,
      servicos,
      imovel,
      tipo_imovel,
      tipo_unidade,
    });
    if (status === 201) {
      return toast.success("Cadastro de unidade efetuado com sucesso !");
    }
    return;
  }

  return (
    <Container>
      <MenuDropDown active="unidade" />
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
          <div className="input-group">
            <Label>inscricao_mte</Label>
            <Input
              value={inscricao_mte}
              onChange={(evento) => setInscricao_mte(evento.target.value)}
              type="text"
            />
          </div>
          <div className="input-group">
            <Label>nome_unidade</Label>
            <Input
              value={nome_unidade}
              onChange={(evento) => setNome_unidade(evento.target.value)}
              type="text"
            />
          </div>
          <div className="input-group">
            <Label>sec_pasta</Label>
            <Input
              value={sec_pasta}
              onChange={(evento) => setSec_pasta(evento.target.value)}
              type="text"
            />
          </div>
          <div className="input-group">
            <Label>servicos</Label>
            <Input
              value={servicos}
              onChange={(evento) => setServicos(evento.target.value)}
              type="text"
            />
          </div>
          <div className="input-group">
            <Label>imovel</Label>
            <Input
              value={imovel}
              onChange={(evento) => setImovel(evento.target.value)}
              type="text"
            />
          </div>
          <div className="input-group">
            <Label>tipo_imovel</Label>
            <Input
              value={tipo_imovel}
              onChange={(evento) => setTipo_imovel(evento.target.value)}
              type="text"
            />
          </div>
          <div className="input-group">
            <Label>tipo_unidade</Label>
            <Input
              value={tipo_unidade}
              onChange={(evento) => setTipo_unidade(evento.target.value)}
              type="text"
            />
          </div>
        </Formulario>
        <FooterFormulario>
          <Button id="excluir">EXCLUIR</Button>
          <Button id="salvar" onClick={handleAddUnity}>
            SALVAR
          </Button>
        </FooterFormulario>
      </FormularioContainer>
    </Container>
  );
}
