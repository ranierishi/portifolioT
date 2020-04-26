import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Menu from './menu'
import GlobalStyle from './styles/global'


ReactDOM.render(
  <React.StrictMode>
    <Menu/>
    <App />
    <GlobalStyle></GlobalStyle>
  </React.StrictMode>,
  document.getElementById('root')
);


