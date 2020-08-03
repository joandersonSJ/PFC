import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
// import { FaHouseDamage } from "react-icons/fa";
import { BsHouseDoorFill } from "react-icons/bs";
import { Container, ButtonMenuDropUp, ButtonLink } from "./styles";
function ItemDropDown(props) {
  const { menuIsOpen, setMenuIsOpen, active } = props;

  return (
    <Container>
      <li>
        <ButtonLink to="/dashboard" active={active} name_route="unidade">
          <BsHouseDoorFill size={35} />
          <p>inicio</p>
        </ButtonLink>
      </li>
      {/* BOTÃO PARA FECHAR O MENU */}
      <ButtonMenuDropUp onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <AiOutlineArrowUp size={35} />
      </ButtonMenuDropUp>
    </Container>
  );
}

export default ItemDropDown;
