import React from "react";
import logo from "../../assets/logo.svg";
// import ImgUnidades from '../../assets/background-unidades.svg'

import { Container } from "./styles";

function Cadastro() {
  return (
    <Container>
      <div id="page">
        <form>
          <div class="header-form">
            <img src={logo} alt=""/>
          </div>

          <fieldset>
            <div class="scrollbar">
              <div class="field-group">
                <div class="field">
                  <label for="name">Nome</label>
                  <input type="text" name="name" required="required" />
                </div>

                <div class="field">
                  <label for="Time-Unid">Horario Funcionamento</label>
                  <input type="address" name="address" required="required" />
                </div>

                <div class="field">
                  <label for="number">Numero/Complemeto</label>
                  <input type="text" name="number" required="required" />
                </div>

                <div class="field">
                  <label for="email">Email</label>
                  <input type="email" name="email" required="required" />
                </div>

                <div class="field">
                  <label for="phone">Telefone</label>
                  <input type="text" name="phone" required="required" />
                </div>
                <div class="btn">
                  <button id="excluir">EXCLUIR</button>
                  <button id="salvar">SALVAR</button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </Container>
  );
}

export default Cadastro;
