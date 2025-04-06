import LandingPage from "../Components/LandindPage";
import NavPage from "../Components/Nav";
// import landingImage from '../Assets/other/landing6.jpeg'; 
import SightingGallery from "../Components/SightingGallery";
import Footer from "../Components/Footer";

const SightingPage = () => {
  return (
    <>
        <NavPage />
        <LandingPage
          image= '/Assets/other/landing6.jpg' 
          heading="Sightings In Sri Lanka" 
          paragraph={
              <>
                Discover the world of birds with our cutting-edge bird identification website. Whether you're a beginner or an expert,<br />
                FeatherFinder helps you explore bird species like never before.
              </>
          } 
        />
        <SightingGallery/>
        <Footer/>
    </>
  );
};

export default SightingPage;
