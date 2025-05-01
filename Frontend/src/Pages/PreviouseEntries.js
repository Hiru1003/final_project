import React from 'react'
import NavPage from '../Components/Nav'
import LandingPage from '../Components/LandindPage'
import LandingImage1 from "../Assets/other/home16.jpg"
import LandingImage2 from "../Assets/other/home17.jpg"
import LandingImage3 from "../Assets/other/home18.jpg"
import Entries from '../Components/Entries';
import Footer from '../Components/Footer';

const PreviousEntries = () => {
  return (
    <div>
      <NavPage />
        <LandingPage 
       images={[LandingImage1, LandingImage2, LandingImage3]} 
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
