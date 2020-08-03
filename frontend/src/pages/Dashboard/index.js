import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome,AiOutlineContainer } from "react-icons/ai";
import {BsBoxArrowInRight,BsClockHistory,
  BsFileText,BsFillHouseFill,BsFillAwardFill} from "react-icons/bs";

import { FaBuilding,FaCity,FaHammer,FaBolt,FaBriefcase,FaBurn,FaChair,
        FaAddressBook,FaTelegramPlane,FaLandmark,FaMapMarkedAlt,
        FaPhoneAlt,FaTshirt,FaUserShield,FaScroll,FaAsterisk,
        FaUnlockAlt,FaHouseDamage,FaTape,FaThumbtack,FaSistrix,FaStreetView } from "react-icons/fa";

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
     <Link href="/unidade/cadastro">
       <li data-id="1">
       <FaHouseDamage size={20}/>
       <span>Unidades</span>         
       </li>   
       </Link>                    
          </div>
      
          <div class="items-grid">
     <Link href="/">
       <li data-id="2">
       <FaBuilding size={20}/>
       <span>Convênios</span>         
       </li>   
       </Link>                    
          </div>

          <div class="items-grid">
     <Link href="/">
       <li data-id="3">
       <FaHammer size={20}/>
       <span>Serviços</span>         
       </li>   
       </Link>                    
          </div>

          <div class="items-grid">
     <Link href="/">
       <li data-id="4">
       <FaBolt size={20}/>
       <span>Energia</span>         
       </li>   
       </Link>                    
          </div>

          <div class="items-grid">
     <Link href="/">
       <li data-id="5">
       <FaBriefcase size={20}/>
       <span>Malotes</span>         
       </li>   
       </Link>                    
          </div>

          <div class="items-grid">
     <Link href="/">
       <li data-id="6">
       <FaTape size={20}/>
       <span>Almoxarifado</span>         
       </li>   
       </Link>                    
          </div>

          <div class="items-grid">
     <Link href="/">
       <li data-id="7">
       <FaUnlockAlt size={20}/>
       <span>Acesso</span>         
       </li>   
       </Link>                    
          </div>

          <div class="items-grid">
     <Link href="/">
       <li data-id="8">
       <FaChair size={20}/>
       <span>Patrimônio</span>         
       </li>   
       </Link>                    
          </div>

          <div class="items-grid">
     <Link href="/">
       <li data-id="9">
       <FaStreetView size={20}/>
       <span>Endereço</span>         
       </li>   
       </Link>                    
          </div>

          <div class="items-grid">
     <Link href="/">
       <li data-id="10">
       <FaBurn size={20}/>
       <span>Água</span>         
       </li>   
       </Link>                    
          </div>

          <div class="items-grid">
     <Link href="/">
       <li data-id="11">
       <BsFillHouseFill size={20}/>
       <span>Aluguel</span>         
       </li>   
       </Link>                    
          </div>

          <div class="items-grid">
     <Link href="/">
       <li data-id="12">
       <FaTshirt size={20}/>
       <span>Farda</span>         
       </li>   
       </Link>                    
          </div>

          <div class="items-grid">
     <Link href="/">
       <li data-id="13">
       <FaLandmark size={20}/>
       <span>Prefeitura</span>         
       </li>   
       </Link>                    
          </div>

          <div class="items-grid">
     <Link href="/">
       <li data-id="14">
       <FaPhoneAlt size={20}/>
       <span>Telefone</span>         
       </li>   
       </Link>                    
          </div>

          <div class="items-grid">
     <Link href="/">
       <li data-id="15">
       <FaAddressBook size={20}/>
       <span>Meus dados</span>         
       </li>   
       </Link>                    
          </div>

          <div class="items-grid">
     <Link href="/">
       <li data-id="16">
       <FaScroll size={20}/>
       <span>Notas Técnicas</span>         
       </li>   
       </Link>                    
          </div>

          <div class="items-grid">
     <Link href="/">
       <li data-id="17">
       <FaUserShield size={20}/>
       <span>Segurança</span>         
       </li>   
       </Link>                    
          </div>

          <div class="items-grid">
     <Link href="/">
       <li data-id="18">
       <BsBoxArrowInRight size={20}/>
       <span>Regional</span>         
       </li>   
       </Link>                    
          </div>

          <div class="items-grid">
     <Link href="/">
       <li data-id="19">
       <FaAsterisk size={20}/>
       <span>Plantas Baixas</span>         
       </li>   
       </Link>                    
          </div>

          <div class="items-grid">
     <Link href="/">
       <li data-id="20">
       <FaTelegramPlane size={20}/>
       <span>Link</span>         
       </li>   
       </Link>                    
          </div>





      </div>

</div>

       
      </Aside>
    </Container>
  );
  }

//export default Dashboard;
