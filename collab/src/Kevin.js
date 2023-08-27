import React from 'react';
import { Link } from "react-router-dom"

function KevinComponent() { 
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <p>Hi I am currently a student learning react</p>
      <Link to="/kevin">Kevin</Link>
    </div>
  );
}

export default KevinComponent;
