import './App.css';
import React from'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import BirdIdentification from './Pages/BirdIdentification';
import BirdInfo from './Components/EndemicBirdInfo';
import AllBirdInfo from './Components/AllBirdInfo';
import BirdGallery from './Components/BirdGalleryEndemic';
import EndemicBirds from './Pages/EndemicBirds';
import AllBirds from './Pages/AllBirds';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BirdIdentification" element={<BirdIdentification />} />
        <Route path="/endemicbirds/:id" element={<BirdInfo />} />
        <Route path="/all-birds/:id" element={<AllBirdInfo />} />
        <Route path="/BirdGallery"  element={<BirdGallery />} />
        <Route path='/endemic-birds' element={<EndemicBirds />}  />
        <Route path='/all-birds' element={<AllBirds />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
