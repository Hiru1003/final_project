import React from 'react'
import NavPage from '../Components/Nav'
import LandingPage from '../Components/LandindPage'
import landingImage from '../Assets/other/landing8.jpg'; 
import Entries from '../Components/Entries';
import Footer from '../Components/Footer';

const PreviousEntries = () => {
  return (
    <div>
      <NavPage />
        <LandingPage 
        image= {landingImage}
        heading="See All Your Birds" 
        paragraph={
            <>
                Discover the world of birds with our cutting-edge bird identification website. Whether you're a beginner or an expert,<br />
                FeatherFinder helps you explore bird species like never before.
            </>
        } 
        />
        <Entries/>
        <Footer/>
    </div>
  )
}

export default PreviousEntries
