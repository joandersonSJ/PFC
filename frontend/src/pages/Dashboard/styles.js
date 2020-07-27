import styled from "styled-components";

export const Body = styled.div`
  body {
    background: #d9d8d8;
  }

  .dash-left {
    background-color: #e3e3e3;
    height: 100%;
    width: 300px;
    position: absolute;
    transition: all 0.2s linear;
  }

  nav {
    width: 100%;
    position: absolute;
    top: 25%;
  }

  nav a {
    text-decoration: none;
  }

  .link {
    background-color: #878686;
    padding: 20px;
    font-family: "Roboto", sans-serif;
    font-size: 12pt;
    color: #f4f4f9;
    transition: all 0.2s linear;
    border-bottom: 2px solid #222;
  }

  .link:hover {
    background-color: #585858;
  }
`;
