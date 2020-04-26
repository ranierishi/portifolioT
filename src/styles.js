import styled from 'styled-components'
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

  h1{
    padding: 10px;
    border: 2px solid white;
    border-radius: 5px;
    font-size:1vw;
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
  
  height: 100vh;
  
  
  
  img{
    max-width:100%;
    max-height:100%;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
  }
  div{
    
    position:absolute;
    width:30vw;
    height:50vh;
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
`;

export const Section2 = styled.div`
    font-family: monospace, Helvetica, sans-serif;
    background-color:#eee;
    
    span{
      display:inline-block;        
    }
    article{
      
      box-shadow: 0 0 10px rgba(0,0,0,0.1);

    }
    li{
      padding: 30px;
    }
    h1{  
      font-size:2vw;    
      width:40%;
      margin-top:-150px;
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
      padding:20px;
      margin-left: 50px;
      text-align:justify;
      width:35vw;
      
    }
`;

export const Footer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
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