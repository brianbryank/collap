import React from 'react';
import Anzal from './Anzal';
import { Link } from "react-router-dom"

function Anzal() {
  return (<div>
      <h1>My name is Anzal Abdinoor.</h1>
      <p>I am currently studying Software Engineering</p>
      <Link to="/anzal">Anzal</Link>
      
      
      <Anzal/>
     
    </div>
  );
}

export default Anzal;
