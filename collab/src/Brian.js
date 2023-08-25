import React from 'react';
import Brian from './Brian';
import { Link } from "react-router-dom"

function Brian() {
  return (<div>
      <h1>hello um a C-Master here.</h1>
      <p>At moringa school 4IN5 group</p>
      <Link to="/brian">Brian</Link>
      
      
      <Brian/>
     
    </div>
  );
}

export default Brian;