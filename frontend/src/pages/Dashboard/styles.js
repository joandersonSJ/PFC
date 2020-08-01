import styled from "styled-components";


export const Container = styled.div`

  height:100vh;



`

export const Content = styled.div`

width:100%;
max-width:700px;



.dash-left {
    background-color: #e3e3e3;
    height: 100%;
    width: 300px;
    position: absolute;
    transition: all 0.2s linear;
  }

  nav {
   position: absolute;
width: 280px;
height: 500px;
left: 0px;
top: 245px;

background: #ECECEC;
box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
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

.link svg{
   
    margin-right:20px;

    
    align-items:center;
    justify-content:space-between
}


  .link:hover {
    background-color: whitesmoke ;
  }


`
//display flex põe Nome na lateral
export const DashRepo = styled.div`
  a{
display:block;
width: 100%;
padding:24px;
border-radius: 5px;
text-decoration:none;



align-items:center;

}

img{
  height:90px;
  width:90px;
  border-radius:50%;
  margin-top:26px;
  display:flex;
  margin-left:100px;
  }

  strong{
    font-size:20px;
    color:#262626;
   
  }

div{
  margin-left:61px;
}
  p{
    background: #4F4F4F;
    width: 124px;
    height: 24px;
    box-shadow: 0px 8px 10px rgba(79, 79, 79, 0.14), 0px 3px 14px rgba(79, 79, 79, 0.12), 0px 4px 5px rgba(79, 79, 79, 0.2);
    border-radius: 12px;
    color:#fff; 
   font-size:18px;
    margin-top:8px;
    text-align:center;
    margin-left:25px;
  }



`
export const Background = styled.div``