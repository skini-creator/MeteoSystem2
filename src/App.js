import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Vous pourrez ajouter d'autres routes ici */}
      </Routes>
    </div>
  );
}

export default App;