import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavPage from '../Components/Nav';
import LandingPage from '../Components/LandindPage';
import landingImage from '../Assets/landing8.jpg'; 
import Diary from '../Components/Diary';
import Footer from '../Components/Footer';

const BirdDiary = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName'); 

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      navigate('/login');  // 👈 Redirect to login if not logged in
    }
  }, [navigate]);

  return (
    <div>
        <NavPage />
        <LandingPage 
          image={landingImage}
          heading={userName ? `Hi ${userName}, ready to write today’s birding memories?` : 'Welcome to Bird Diary'}
          paragraph={
              <>
                  Discover the world of birds with our cutting-edge bird identification website. Whether you're a beginner or an expert,<br />
                  FeatherFinder helps you explore bird species like never before.
              </>
          } 
        />
        <Diary />
        <Footer />
    </div>
  );
};

export default BirdDiary;
