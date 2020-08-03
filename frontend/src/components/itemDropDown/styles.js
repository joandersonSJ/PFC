import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #aaa;
  opacity: 0.7;
  width: 70px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > li {
    list-style: none;
  }
`;
export const ButtonMenuDropUp = styled.button`
  background-color: #aaa;
  color: #555;
  height: 70px;
  width: 70px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.8s;

  &:hover {
    background-color: #222;
    color: #aaa;
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.active === props.name_route ? "#222" : "#666")};
  display: flex;
  font-weight: bold;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #222;
  border-bottom: 1px solid #222;
  padding: 10px 0;
  transition: opacity 0.7s;
  &:hover {
    opacity: 0.7;
  }
`;
