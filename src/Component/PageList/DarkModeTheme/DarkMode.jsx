import React from 'react'
import { useState } from 'react';

const DarkMode = () => {
    const[state, setState] = useState('false');
    const handleClick = () =>setState(!state);
    
  return (
    <div>
        <button onClick={() =>setState(!state)}>DarkMode</button>
        <button onClick={handleClick}>     {!state? "ON": "OFF"}</button>
    
      
    </div>
  )
}

export default DarkMode
