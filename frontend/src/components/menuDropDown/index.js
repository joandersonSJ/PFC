import React, { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import ItemDropDown from "../itemDropDown";

import { ButtonMenuDropDown } from "./styles";

function MenuDropDown({ active }) {
  // const { active } = props;
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  return (
    <>
      {!menuIsOpen && (
        <ButtonMenuDropDown onClick={() => setMenuIsOpen(!menuIsOpen)}>
          <AiOutlineArrowDown size={35} color="black" />
        </ButtonMenuDropDown>
      )}
      {menuIsOpen && (
        <ItemDropDown
          active={active}
          menuIsOpen={menuIsOpen}
          setMenuIsOpen={setMenuIsOpen}
        />
      )}
    </>
  );
}

export default MenuDropDown;
