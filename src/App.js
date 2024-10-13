import './App.css';
import React from'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import BirdIdentification from './Pages/BirdIdentification';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BirdIdentification" element={<BirdIdentification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
