import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100vw;
  flex-direction: row;
  align-items: center;
  position: absolute;
`;

export const FormularioContainer = styled.div`
  min-width: 380px;
  position: relative;
  top: 6px;
  right: 300px;
  border-radius: 4px;
  display: grid;
  /* overflow-y: scroll; */
  grid-template-columns: 1fr;
  grid-template-rows: 24vh 60vh 12vh;
  grid-template-areas:
    "head"
    "formulario"
    "footer";

  box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
`;

export const Image = styled.img`
  min-width: 1018px;
  width: auto;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;

  padding: 20px 14px;
  font-size: 12px;

  border: 1px solid rgba(89, 89, 89, 0.66);
  box-sizing: border-box;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  letter-spacing: 0.05em;

  color: #939393;

  margin-bottom: 6px;
  &:focus {
    border: 2px solid rgba(80, 80, 80, 0.9);
  }
`;

export const Formulario = styled.form`
  grid-area: formulario;
  height: 100%;
  background: rgba(242, 242, 242, 0.76);
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  overflow-y: scroll;
  position: absolute;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #016fb9;
  }
  & > .input-group {
    overflow: visible;
  }
`;

export const SelectMunicipios = styled.select``;

export const ContainerHeader = styled.div`
  grid-area: head;
  width: 100%;
  background: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12),
    0px 3px 5px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.img`
  height: 72px;
  width: 165px;
`;

export const FooterFormulario = styled.footer`
  width: 100%;
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #eeeeee;

  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12),
    0px 3px 5px rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  width: 150px;
  height: 38px;

  /* font-family: Roboto; */
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.05em;

  color: #e6e6e6;

  transition: opacity 0.5s;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &#salvar {
    background: #016fb9;
    border: 1px solid #016fb9;
    box-shadow: 0px 4px 5px rgba(2, 112, 186, 0.2),
      0px 3px 14px rgba(2, 112, 186, 0.12), 0px 8px 10px rgba(2, 112, 186, 0.14);
    border-radius: 6px;
  }

  &#excluir {
    background: #f5f5f5;
    border: 1px solid #c95c53;
    box-sizing: border-box;
    box-shadow: 0px 4px 5px rgba(199, 57, 42, 0.2),
      0px 3px 14px rgba(199, 57, 42, 0.12), 0px 8px 10px rgba(199, 57, 42, 0.14);
    border-radius: 6px;

    transition: background-color 0.5s;

    color: #c95c53;
  }

  &#excluir:hover {
    background-color: #c95c53;
    color: #f5f5f5;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  color: #222;
  margin: 25px 0;
`;
