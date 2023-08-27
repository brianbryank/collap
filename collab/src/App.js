import React from 'react';
import RobertComponent from './Robert';
import BrianComponent from './Brian';
import AnzalComponent from './Anzal';
import KevinComponent from './Kevin';
import AbdiComponent from './Abdi';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <button><Link to="/Robert">Robert</Link></button>
        <button><Link to="/home">Brian</Link></button>
        <button><Link to="/about">Anzal</Link></button>
        <button><Link to="/contacts">Kevin</Link></button>
        <button><Link to="/abdi">Abdi</Link></button> {/* Added button for Abdi */}
      </nav>

    <div className="content">
      <Routes>
        <Route path='/robert' element={<RobertComponent />} /> {/* Use the renamed component */}
        <Route path='/home' element={<BrianComponent />} />
        <Route path='/about' element={<AnzalComponent />} />
        <Route path='/contacts' element={<KevinComponent />} />
        <Route path='/abdi' element={<AbdiComponent />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
