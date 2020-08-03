import styled from "styled-components";

export const NavContainer = styled.nav``;
export const NavList = styled.ul``;
export const ButtonMenuDropDown = styled.button`
  position: absolute;
  top: -18px;
  left: 0;
  background-color: #aaa;
  height: 70px;
  width: 70px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border: none;
  cursor: pointer;
  transition: opacity 0.8s;

  &:hover {
    opacity: 0.6;
  }
`;
