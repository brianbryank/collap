import React from 'react';
import { Link } from "react-router-dom"

function AnzalComponent() { 
  return (
    <div>
      <h1>My name is Anzal Abdinoor.</h1>
      <p>I am currently studying Software Engineering</p>
      <Link to="/anzal">Anzal</Link>
    </div>
  );
}

export default AnzalComponent;
