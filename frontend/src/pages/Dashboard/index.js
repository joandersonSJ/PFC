import React from "react";
<<<<<<< HEAD
import { Container,Content,Background,DashRepo,Aside,Main,Form } from "./styles";
import {AiOutlineHome,AiOutlineContainer,AiOutlineHistory} from 'react-icons/ai'
import {BsBoxArrowInRight} from "react-icons/bs";



=======
import { Container,Content,Background,DashRepo } from "./styles";
import {AiOutlineHome} from 'react-icons/ai'
>>>>>>> 0bd7b93... :rocket:Menu esquerdo Dashboard 80% concluido
//Testar Imagem no border-radius
import background_login from "../../assets/background-login.svg";
function Dashboard() {
  return (
    <Container>
      <Content>
<<<<<<< HEAD
      <div class="dash-left">      
=======
      <div class="dash-left">
>>>>>>> 0bd7b93... :rocket:Menu esquerdo Dashboard 80% concluido
      <DashRepo>     
      <a href="Test">
      <img src={background_login} alt="Test"/>
      <div>
        <strong>Carlos Nascimento</strong>
        <p>Administrador</p>
<<<<<<< HEAD
      </div>       
       </a>
      </DashRepo>      
=======
      </div>
     
       
       </a>
      </DashRepo>
     
     
      
>>>>>>> 0bd7b93... :rocket:Menu esquerdo Dashboard 80% concluido
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
<<<<<<< HEAD
    <Aside>
      <Main>
         <Form>
          <a href="#">Unidades</a>
        </Form>



        </Main>
      </Aside>
=======
      <Background/>
>>>>>>> 0bd7b93... :rocket:Menu esquerdo Dashboard 80% concluido
    </Container>
  );
}

export default Dashboard;
