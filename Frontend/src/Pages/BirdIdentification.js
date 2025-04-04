import LandingPage from "../Components/LandindPage";
import NavPage from "../Components/Nav";
import landingImage from '../Assets/landing6.jpeg'; 
import BirdIdentificationByPhotos from "../Components/BirdIdentificationByPhotos";
import Footer from "../Components/Footer";

const BirdIdentification = () => {
  return (
    <>
        <NavPage />
        <LandingPage
          image= {landingImage}
          heading="Bird Identification" 
          paragraph={
              <>
                Discover the world of birds with our cutting-edge bird identification website. Whether you're a beginner or an expert,<br />
                FeatherFinder helps you explore bird species like never before.
              </>
          } 
        />
        <BirdIdentificationByPhotos/>
        <Footer/>
    </>
  );
};

export default BirdIdentification;
