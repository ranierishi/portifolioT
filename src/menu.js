import React, { useState } from 'react';
import {Header ,Title} from './styles'


export default function Menu({ setRef }) {
  
  let [scroll, setScroll] = useState(false)

  function handleClick(){
    console.log("click")
    setRef(scroll)
    setScroll(!scroll)
  }

  return (  
      <Header>
        <Title>Arthur Iung</Title>
        <div>

        <Title><button onClick={handleClick}>Projects</button></Title>
        
        </div>
      </Header>

        
  );
}

