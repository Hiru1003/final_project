import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'; // Import the ScrollToTop component

import HomePage from './Pages/Home';
import BirdIdentification from './Pages/BirdIdentification';
import BirdInfo from './Components/EndemicBirdInfo';
import AllBirdInfo from './Components/AllBirdInfo';
import BirdGallery from './Components/BirdGalleryEndemic';
import EndemicBirds from './Pages/EndemicBirds';
import AllBirds from './Pages/AllBirds';
import LoginPage from './Pages/Login';
import SignupPage from './Pages/Signup';
import VisualIdentification from './Pages/VisualIdentification';
import SightingGallery from './Components/SightingGallery';
import SightingPage from './Pages/Sighting';
import SightingsInfo from './Components/SightingInfo';
import Feedback from './Components/FeedBack';
import BirdDiary from './Pages/BirdDiary';
import PreviousEntries from './Pages/PreviouseEntries';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Bird-Identification" element={<BirdIdentification />} />
        <Route path="/Visual-Identification" element={<VisualIdentification />} />
        
        <Route path="/Bird-Diary" element={<BirdDiary />} />
        <Route path="/SaveBirds" element={<PreviousEntries />} />
        <Route path="/endemicbirds/:id" element={<BirdInfo />} />
        <Route path="/all-birds/:id" element={<AllBirdInfo />} />
        <Route path="/BirdGallery" element={<BirdGallery />} />
        <Route path='/endemic-birds' element={<EndemicBirds />} />
        <Route path='/all-birds' element={<AllBirds />} />
        <Route path='/Sightings' element={<SightingPage />} />
        <Route path='/SightingsGallery' element={<SightingGallery />} />
        <Route path="/Sightings/:id" element={<SightingsInfo />} />
        <Route path='/Feedback' element={<Feedback />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
