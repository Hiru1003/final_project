import BirdGalleryEndemic from "../Components/BirdGalleryEndemic";
import LandingPage from "../Components/LandindPage";
import NavPage from "../Components/Nav";
import Footer from "../Components/Footer";

const EndemicBirds = () => {
  return (
    <>
        <NavPage />
        <LandingPage 
        image= '/other/endemicbirdlanding4.jpg' 
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
