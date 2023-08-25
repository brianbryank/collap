import React from "react";
import { Link } from React-router-dom;
import Abdi from './Abdi.js';

function Abdi(){
    return (
    <div>
        <h1>
            This is my commponent
        </h1>
        <p>The component at 4^4 </p>
        <link to="/Abdi">Abdi</link>
    <Abdi/>
    </div>
    );
}
export default Abdi;