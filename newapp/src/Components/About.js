import React from 'react';
import {useNavigate} from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
  return (
    <>
        <h1 style={{color:"blue"}}>GOOD MORNING!!</h1>
        <button onClick={() => navigate (-1)}>BY BY!!</button>
    </>
  );
};

export default About;
