import React from 'react';
import { Link } from "react-router-dom"

function AbdiComponent() {
    return (
        <div>
            <h1>This is my component</h1>
            <p>The component at 4^4 </p>
            <Link to="/abdi">Abdi</Link>
        </div>
    );
}

export default AbdiComponent;
