import React from 'react'
import {useNavigate} from "react-router-dom";

const Home = () => {
        const navigate = useNavigate();

  return (
    <>
        <h1 style={{color:"pink"}}>WELCOME</h1>
        <button onClick={() => navigate("/About")}>ABOUT</button>
    </>
  );
};

export default Home;

