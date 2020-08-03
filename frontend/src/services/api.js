import axios from "axios";

const api = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/",
});

const apiBackend = axios.create({
  baseURL: "http://localhost:3333",
});

export { api, apiBackend };
