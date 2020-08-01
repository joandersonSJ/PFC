import React from "react";
import { Container,Content,Background,DashRepo } from "./styles";
import {AiOutlineHome} from 'react-icons/ai'
//Testar Imagem no border-radius
import background_login from "../../assets/background-login.svg";
function Dashboard() {
  return (
    <Container>
      <Content>
      <div class="dash-left">
      <DashRepo>     
      <a href="Test">
      <img src={background_login} alt="Test"/>
      <div>
        <strong>Carlos Nascimento</strong>
        <p>Administrador</p>
      </div>
     
       
       </a>
      </DashRepo>
     
     
      
        <nav>
          <a href="./">
            <div class="link">
              <AiOutlineHome size={20}/>
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
      <Background/>
    </Container>
  );
}

export default Dashboard;
