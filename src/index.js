import React, {  } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Menu from './menu'
import GlobalStyle from './styles/global'
import "typeface-roboto";

function setRef ( value ) {
  console.log("setRef => ", value)
  ReactDOM.render(
    <>
      <Menu setRef={setRef} />
      <App scroll={value}/>
      <GlobalStyle></GlobalStyle>
    </>,
    document.getElementById('root')
  );  
}

ReactDOM.render(
  <>
    <Menu setRef={setRef} />
    <App scroll={undefined}/>
    <GlobalStyle></GlobalStyle>
  </>,
  document.getElementById('root')
);


