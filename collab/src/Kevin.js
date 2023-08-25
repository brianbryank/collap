import React from 'react';
import Kevin from './Kevin';
import { link } from "react-router-dom"

function Kevin() {
  return (<div>
      <h1>Welcome to My React App</h1>
      <p>Hi I am currently a student learning react</p>
      <link to="/kevin">Kevin</link>
      
      
      <Kevin />
     
    </div>
  );
}

export default Kevin;
