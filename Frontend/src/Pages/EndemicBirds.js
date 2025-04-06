import BirdGalleryEndemic from "../Components/BirdGalleryEndemic";
import LandingPage from "../Components/LandindPage";
import NavPage from "../Components/Nav";
import landingImage from '../Assets/endemicbirdlanding4.jpg'; 
import Footer from "../Components/Footer";

const EndemicBirds = () => {
  return (
    <>
        <NavPage />
        <LandingPage 
        image= {landingImage}
        heading="Endemic Birds" 
        paragraph={
            <>
              Discover the stunning avifauna found only in Sri Lanka. From the vibrant Blue Magpie to the elusive Spot-winged Thrush,<br />
              learn about these extraordinary species and their habitats.
            </>
          }
      />
        <BirdGalleryEndemic/>
        <Footer/>
    </>
  );
};

export default EndemicBirds;
