import React from 'react';
import { Link } from "react-router-dom"

function RobertComponent() {
    return (
        <div>
            <h1>This is Robert Component</h1>
            <p>I love making new friends</p>
            <p>I am a big fan of Expository and Real-life Documentaries.</p>
            <Link to="/Robert">Robert</Link>
        </div>
    );
}

export default RobertComponent;
