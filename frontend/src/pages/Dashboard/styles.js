import styled from "styled-components";

export const Container = styled.div`
 
 *{margin:0;
    padding:0;
 
 } 
 
 display:grid;
 grid-template-columns:1fr 3fr;
 gap:10px;

  background: #f3f1f1;
  height: 100vh;
  width:100vw;
`;



export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  .dash-left {
    background-color: #e3e3e3;
    height: 100%;
    width: 300px;
    position: absolute;
    transition: all 0.2s linear;
  }

  nav {
    position: absolute;
    width: 285px;
    height: 500px;
    left: 0px;
    top: 245px;

    background: #ececec;
    border-radius: 0px 94px 0px 0px;
  }

  nav a {
    text-decoration: none;
  }

  .link {
    padding: 20px;
    font-family: "Roboto", sans-serif;
    font-size: 12pt;
    color: #585858;
    transition: all 0.2s linear;
  }



  .link svg {
    margin-right: 20px;

    align-items: center;
    justify-content: space-between;
  }

  .link:hover {
    background-color: whitesmoke;
  }
`;
//display flex põe Nome na lateral
export const DashRepo = styled.div`
  a {
    display: block;
    width: 100%;
    padding: 24px;
    border-radius: 5px;
    text-decoration: none;

    align-items: center;
  }

  img {
    height: 90px;
    width: 90px;
    border-radius: 50%;
    margin-top: 26px;
    display: flex;
    margin-left: 100px;
  }

  strong {
    font-size: 20px;
    color: #262626;
  }

  div {
    margin-left: 61px;
  }


  p {
    background: #4f4f4f;
    width: 124px;
    height: 24px;
    border-radius: 12px;
    color: #fff;
    font-size: 18px;
    margin-top: 8px;
    text-align: center;
    margin-left: 25px;
  }
`;


export const Aside = styled.div`

.items-grid2{
  display:grid;
  grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
  gap:15px;
  margin-top:80px;
 
  
}
.items-grid li{
  background-color: #C4C4C4;
  width: 120px;
height: 100px;
border-radius: 18px;
box-shadow: 2px 1px #585858;
padding:32px 24px 16px;

display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
}

a {
    
    text-decoration: none;
        
  }






`;


