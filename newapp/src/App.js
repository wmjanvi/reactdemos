
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
    const [inputvalue,setInputvalue] =useState("");
    const privvalue = useRef("");

    useEffect (()=>{
      privvalue.current = inputvalue;
  },[inputvalue]);

  return (
    <> 
     <input type='text' value={inputvalue} onChange={(e) => setInputvalue(e.target.value)} style={{backgroundColor:"lightblue"}}/>
     <p style={{backgroundColor:"lightpink", width:"100%"}}>Current value : {inputvalue}</p>
     
     <p>Prev Value : {privvalue.current}</p>
     
    </>
  );
}

export default App;
