import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <button className="nav-link">
          <Link to="/Robert">Robert</Link>
        </button>
      </nav>

      <Routes>
        <Route path="/Robert" element={<Robert />} />
      </Routes>
    </div>
  );
}

export default App;
