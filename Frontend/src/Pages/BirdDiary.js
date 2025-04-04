import React from 'react'
import NavPage from '../Components/Nav'
import LandingPage from '../Components/LandindPage'
import landingImage from '../Assets/landing8.jpg'; 
import Diary from '../Components/Diary';
import Footer from '../Components/Footer';

const BirdDiary = () => {
  return (
    <div>
        <NavPage />
        <LandingPage 
        image= {landingImage}
        heading="Bird Diary" 
        paragraph={
            <>
                Discover the world of birds with our cutting-edge bird identification website. Whether you're a beginner or an expert,<br />
                FeatherFinder helps you explore bird species like never before.
            </>
        } 
        />
        <Diary/>
        <Footer/>
        
    </div>
  )
}

export default BirdDiary
