import styled from 'styled-components'
//import { Form as Unform } from '@unform/web';
//import img from './img/img3.jpeg'

export const Header = styled.div` 

  background-color: black;  
  min-height: 30px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);  
  display:flex;
  align-items: center;
  justify-content: space-between;
  flex-direction:row;
  
  div{
    display:inline;
    padding:0 20px
  }
  h1{
    font-size:1.4vw;
    display:inline;
  }
  
  
`;

export const Title = styled.h1`
  margin-left: 20px;
  font-size: 1.2vw;
  color: #ddd;
  font-family: Arial, Helvetica, sans-serif;

  
  button{
    padding: 10px;
    border: 2px solid white;
    background-color:black;
    border-radius: 5px;
    color:white;
    font-size:1.2vw;
    cursor:pointer;
  }
`;

export const Prof = styled.h1`
  font-size: 24px;
`;

export const Container = styled.div`
  flex-direction:column;
  height: 100%;

`;

export const Section = styled.div`  
  height:100%;
  
  img{
    max-width:100%;
    max-height:100%;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
  }
  div{
    
    position:absolute;
    width:30vw;
    
    margin:8% 5%;
  }
  h1{
    color: #fff;    
    text-shadow:2px 2px rgba(0,0,0,0.2);    
    text-align: center;
    font-size: 4vw; 
    
  }

  h2{
    color: #fff;    
    text-shadow:2px 2px rgba(0,0,0,0.2);    
    text-align: center;
    font-size: 3vw; 

  }
  h3{
    color: #fff;      
    text-shadow:2px 2px rgba(0,0,0,0.2);     
    text-align: center;
    font-size: 1.3vw; 

  }
`;

export const PlayerWrapper = styled.div`
    display:inline-block;
    padding:20px;
    padding-bottom:0px;
    width:100%;
    max-width:640px;
`;

export const Section2 = styled.div`
    font-family: 'Roboto', sans-serif;
    background-color:#fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    
    span{
      display:flex; 
      flex-direction:column;

    }
    article{

      width: 90%;
      margin: 0 auto;
      

    }
    ul{
      width: 90vw;
      list-style-type: none;
    }
    li{
      padding: 30px;
      justify-content:space-between ;
      display:flex;
    }
    h1{  
      font-size:2vw;          
      padding:20px;
      margin-left: 30px;
      
    }
    h2{
      font-size:1.5vw;
      padding:20px;
      margin-left: 50px;
  }

    h3{
      padding:20px;
      margin-left: 50px;
    }

    h5{
      font-weight:400;
      padding:20px;
      font-size:1vw;
      margin-left: 50px;
      text-align:justify;
      width:35vw;
      max-height:252px;
      overflow-y:auto;
      
      
    }
    h5::-webkit-scrollbar{
      width: 8px;
    }
    h5::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    }

    h5::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(51,207,255, 0.8);
    }
`;

/*export const Form = styled(Unform)`
  
`;
*/
export const Section3 = styled.div`
  background-color:#90EE90;
  height:50vh;
  justify-content:center;
  display:flex;
  flex-flow:column;
`;

export const Footer = styled.div`
  
  background-color: #000;  
  min-height: 10vh;
  padding: 20px;

  h1{
    
    color: #fff;
    display: inline;
    font-size: 1vw;
    text-align: center;
    
  }
    
`;