import React from "react";
import { Container,Content,Background,DashRepo,Aside,Main,Form } from "./styles";
import {AiOutlineHome,AiOutlineContainer,AiOutlineHistory} from 'react-icons/ai'
import {BsBoxArrowInRight} from "react-icons/bs";



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
            <div class="link"><AiOutlineContainer size={20}/>  
            Relatorio
            </div>
          </a>
          <a href="./">
            <div class="link"><AiOutlineHistory  size={20}/>              
              Historico
              </div>
          </a>
          <a href="./">
            <div class="link"><BsBoxArrowInRight  size={20}/>
              Sair
              </div>
          </a>
        </nav>
      </div>
      </Content>
    <Aside>
      <Main>
         <Form>
          <a href="#">Unidades</a>
        </Form>



        </Main>
      </Aside>
    </Container>
  );
}

export default Dashboard;
