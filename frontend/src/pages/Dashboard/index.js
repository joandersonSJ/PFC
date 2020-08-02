import React, { useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useVerifyHasSession } from "../../hooks/verifyIfHasSession";
import { useHistory } from "react-router-dom";

//Testar Imagem no border-radius
import background_login from "../../assets/background-login.svg";
import { Container, Content, Background, DashRepo } from "./styles";

function Dashboard() {
  const history = useHistory();
  const verifyHasSession = useVerifyHasSession();

  useEffect(() => {
    if (!verifyHasSession) {
      history.push("/");
    }
  }, [history, verifyHasSession]);

  return (
    <Container>
      <Content>
        <div class="dash-left">
          <DashRepo>
            <a href="Test">
              <img src={background_login} alt="Test" />
              <div>
                <strong>Carlos Nascimento</strong>
                <p>Administrador</p>
              </div>
            </a>
          </DashRepo>

          <nav>
            <a href="./">
              <div class="link">
                <AiOutlineHome size={20} />
                Inicio
              </div>
            </a>
            <a href="./">
              <div class="link">Relatorio</div>
            </a>
            <a href="./">
              <div class="link">Historico</div>
            </a>
            <a href="./">
              <div class="link">Sair</div>
            </a>
          </nav>
        </div>
      </Content>
      <Background />
    </Container>
  );
}

export default Dashboard;
