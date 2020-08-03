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
  height: 600px;
  min-width: 380px;
  position: relative;
  right: 300px;
  border-radius: 4px;
  padding-top: 40px;
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
`;

export const Formulario = styled.form`
  height: 100%;
  padding-top: 600px;
  width: 100%;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #016fb9;
  }
`;
export const Label = styled.label`
  /* font-family: Roboto; */
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.05em;
  
  padding-left: 10px;
  margin-bottom: 10px;
  color: red;
  cursor: pointer;
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