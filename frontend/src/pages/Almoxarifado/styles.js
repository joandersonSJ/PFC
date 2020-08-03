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
  padding-top: 100px;
  width: 100%;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  overflow-y: auto;

  /*&::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #016fb9;
  }*/
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
