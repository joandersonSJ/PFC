import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
`;

export const Main = styled.main`
  background-color: #f0f0f0;
  width: 417px;
  height: 734px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 316px;
  height: 43.33px;

  padding-left: 14px;
  font-size: 12px;

  border: 1px solid rgba(89, 89, 89, 0.66);
  box-sizing: border-box;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  letter-spacing: 0.05em;

  color: #939393;

  margin-bottom: 44px;
`;

export const Logo = styled.img`
  margin-top: 40px;
  margin-bottom: 46px;
`;

export const Background = styled.img`
  width: 941px;
  height: 734px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  /* font-family: Roboto; */
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.05em;

  padding-left: 10px;
  margin-bottom: 6px;
  color: #5c5c5c;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

export const Button = styled.button`
  width: 316px;
  height: 46px;
  margin-bottom: 40px;

  /* font-family: Roboto; */
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.05em;

  color: #e6e6e6;

  transition: opacity 0.5s;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &#entrar {
    background: #016fb9;
    border: 1px solid #016fb9;
    box-shadow: 0px 4px 5px rgba(2, 112, 186, 0.2),
      0px 3px 14px rgba(2, 112, 186, 0.12), 0px 8px 10px rgba(2, 112, 186, 0.14);
    border-radius: 6px;
  }

  &#voltar {
    background: #f5f5f5;
    border: 1px solid #c95c53;
    box-sizing: border-box;
    box-shadow: 0px 4px 5px rgba(199, 57, 42, 0.2),
      0px 3px 14px rgba(199, 57, 42, 0.12), 0px 8px 10px rgba(199, 57, 42, 0.14);
    border-radius: 6px;

    transition: background-color 0.5s;

    color: #c95c53;
  }

  &#voltar:hover {
    background-color: #c95c53;
    color: #f5f5f5;
  }
`;

export const Paragrafo = styled.p`
  position: absolute;
  left: 119px;
  bottom: 20px;

  /* font-family: Montserrat; */
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;

  color: #666666;
`;
// .container{
//   display:flex;
//   height: 100vh;
//   flex-direction: row;
// }

// main{
//   background-color: #F0F0F0;
//   width: 417px;
//   height: 734px;
//   display: flex;
//   flex-direction: column;
// }

// input{
//   width: 316px;
//   height: 43.33px;

//   padding-left: 14px;
//   font-size: 12px;

//   border: 1px solid rgba(89, 89, 89, 0.66);
//   box-sizing: border-box;
//   border-radius: 4px;

//   display: flex;
//   justify-content: space-between;
//   letter-spacing: 0.05em;

//   color: #939393;

//   margin-bottom: 44px;
// }

// .logo{
//   margin-top: 40px;
//   margin-bottom: 46px;
// }

// .background{
//   width: 941px;
//   height: 734px;
// }

// form{
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }

// label{

//   /* font-family: Roboto; */
//   font-style: normal;
//   font-weight: 500;
//   font-size: 15px;
//   letter-spacing: 0.05em;

//   padding-left: 10px;
//   margin-bottom: 6px;
//   color: #5C5C5C;
// }

// .input-container{
//   display: flex;
//   flex-direction: column;
//   justify-content: left;
// }

// button{
//   width: 316px;
//   height: 46px;
//   margin-bottom: 40px;

//   /* font-family: Roboto; */
//   font-style: normal;
//   font-weight: bold;
//   font-size: 16px;
//   text-align: center;
//   letter-spacing: 0.05em;

//   color: #E6E6E6;

//   transition: opacity 0.5s;
// }

// button:hover{
//   cursor: pointer;
//   opacity: 0.8;
// }

// #entrar{
//   background: #016FB9;
//   border: 1px solid #016FB9;
//   box-shadow: 0px 4px 5px rgba(2, 112, 186, 0.2),
//               0px 3px 14px rgba(2, 112, 186, 0.12),
//               0px 8px 10px rgba(2, 112, 186, 0.14);
//   border-radius: 6px;

// }

// #voltar{
//   background: #F5F5F5;
//   border: 1px solid #C95C53;
//   box-sizing: border-box;
//   box-shadow: 0px 4px 5px rgba(199, 57, 42, 0.2),
//               0px 3px 14px rgba(199, 57, 42, 0.12),
//               0px 8px 10px rgba(199, 57, 42, 0.14);
//   border-radius: 6px;

//   transition: background-color 0.5s;

//   color: #C95C53;
// }

// #voltar:hover{
//   background-color: #C95C53;
//   color: #f5f5f5;
// }

// p{
//   position: absolute;
//   left: 119px;
//   bottom: 20px;

//   /* font-family: Montserrat; */
//   font-style: normal;
//   font-weight: normal;
//   font-size: 10px;
//   line-height: 12px;

//   color: #666666;
// }
