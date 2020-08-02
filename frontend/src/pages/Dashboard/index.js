import React, { useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useVerifyHasSession } from "../../hooks/verifyIfHasSession";
import { useHistory } from "react-router-dom";

//Testar Imagem no border-radius
import background_login from "../../assets/background-login.svg";
import { Container, Content, Aside, DashRepo,Main } from "./styles";

/*function Dashboard() {
  const history = useHistory();
  const verifyHasSession = useVerifyHasSession();

  useEffect(() => {
    if (!verifyHasSession) {
      history.push("/");
    }
  }, [history, verifyHasSession]);*/
  export default function  Dashboard(){
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
      
      
      
      <Aside>  
        <div class="dash-rigth">
         <div>
          <strong>BemVindo, Carlos</strong>
        </div>
           
       
      
      
      <nav>
      <a href="./"><div class="link">Inicio1</div></a>
            <a href="./"><div class="link">Inicio2</div></a>
            <a href="./"><div class="link">Inicio3</div></a>
            <a href="./"><div class="link">Inicio4</div></a>
            <a href="./"><div class="link">Inicio5</div></a>
            <a href="./"><div class="link">Inicio6</div></a>
            <a href="./"><div class="link">Inicio7</div></a>
            <a href="./"><div class="link">Inicio8</div></a>
            <a href="./"><div class="link">Inicio9</div></a>
            <a href="./"><div class="link">Inicio10</div></a>
             <a href="./"><div class="link">Inicio13</div></a>
            <a href="./"><div class="link">Inicio14</div></a>
            <a href="./"><div class="link">Inicio15</div></a>
            <a href="./"><div class="link">Inicio16</div></a>
            <a href="./"><div class="link">Inicio17</div></a>
            
            <Main>      
          <div class="User">
          <div class="Data">          
          <a href="./"><div class="Data-link">Inicio2</div></a>
            <a href="./"><div class="Data-link">Inicio18</div></a>
            </div>
            </div>
            </Main>
            
            
             
            
      </nav>

        

        </div>



       
      </Aside>
    </Container>
  );
  }

//export default Dashboard;
