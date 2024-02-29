import React, { useEffect, useState } from 'react';


function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 3000);
    }, []); // <- add empty brackets here
    
    return <h1>I've rendered {count} times!</h1>;
  }
  
export default Timer;
