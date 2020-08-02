import React, { useEffect } from "react";
import { AiOutlineHome,AiOutlineContainer } from "react-icons/ai";
import {BsBoxArrowInRight,BsClockHistory,BsFileText} from "react-icons/bs";
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
             <div class="link">
             <AiOutlineContainer size={20}/>
               Relatorio</div>
            </a>
              <a href="./">
              <div class="link">
              <BsClockHistory size={20}/>
                Historico</div>
            </a>
            <a href="./">            
              <div class="link">
              <BsBoxArrowInRight size={20}/>
                Sair</div>
            </a>
          </nav>
        </div>
          
      </Content>
      
      
      
      <Aside>  
        <div class="dash-rigth">
         <div>
          <strong>BemVindo, Carlos</strong>
        </div>
           
        <div class="items-grid2">
     <div class="items-grid">
       <li data-id="1">
       <BsBoxArrowInRight size={20}/>
       <span>Inicio1</span>
       </li>                           
          </div>
          
          <div class="items-grid">
       <li data-id="2">
       <BsBoxArrowInRight size={20}/>
       <span>Inicio1</span>
       </li>                           
          </div>
       
          <div class="items-grid">
       <li data-id="1">
       <BsBoxArrowInRight size={20}/>
       <span>Inicio1</span>
       </li>                           
          </div>
          
          <div class="items-grid">
       <li data-id="2">
       <BsBoxArrowInRight size={20}/>
       <span>Inicio1</span>
       </li>                           
          </div>
       
          <div class="items-grid">
       <li data-id="1">
       <BsBoxArrowInRight size={20}/>
       <span>Inicio1</span>
       </li>                           
          </div>
          
          <div class="items-grid">
       <li data-id="2">
       <BsBoxArrowInRight size={20}/>
       <span>Inicio1</span>
       </li>                           
          </div>
       
          <div class="items-grid">
       <li data-id="1">
       <BsBoxArrowInRight size={20}/>
       <span>Inicio1</span>
       </li>                           
          </div>
          
          <div class="items-grid">
       <li data-id="2">
       <BsBoxArrowInRight size={20}/>
       <span>Inicio1</span>
       </li>                           
          </div>
       
          <div class="items-grid">
       <li data-id="1">
       <BsBoxArrowInRight size={20}/>
       <span>Inicio1</span>
       </li>                           
          </div>
          
          <div class="items-grid">
       <li data-id="2">
       <BsBoxArrowInRight size={20}/>
       <span>Inicio1</span>
       </li>                           
          </div>
       
          <div class="items-grid">
       <li data-id="1">
       <BsBoxArrowInRight size={20}/>
       <span>Inicio1</span>
       </li>                           
          </div>
          
          <div class="items-grid">
       <li data-id="2">
       <BsBoxArrowInRight size={20}/>
       <span>Inicio1</span>
       </li>                           
          </div>
       
          <div class="items-grid">
       <li data-id="1">
       <BsBoxArrowInRight size={20}/>
       <span>Inicio1</span>
       </li>                           
          </div>
          
          <div class="items-grid">
       <li data-id="2">
       <BsBoxArrowInRight size={20}/>
       <span>Inicio1</span>
       </li>                           
          </div>
       
          <div class="items-grid">
       <li data-id="1">
       <BsBoxArrowInRight size={20}/>
       <span>Inicio1</span>
       </li>                           
          </div>
          
          <div class="items-grid">
       <li data-id="2">
       <BsBoxArrowInRight size={20}/>
       <span>Inicio1</span>
       </li>                           
          </div>
       
          <div class="items-grid">
       <li data-id="1">
       <BsBoxArrowInRight size={20}/>
       <span>Inicio1</span>
       </li>                           
          </div>
          
          <div class="items-grid">
       <li data-id="2">
       <BsBoxArrowInRight size={20}/>
       <span>Inicio1</span>
       </li>                           
          </div>
       







      </div>

</div>

       
      </Aside>
    </Container>
  );
  }

//export default Dashboard;
