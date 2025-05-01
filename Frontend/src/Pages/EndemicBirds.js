import BirdGalleryEndemic from "../Components/BirdGalleryEndemic";
import LandingPage from "../Components/LandindPage";
import NavPage from "../Components/Nav";
import Footer from "../Components/Footer";
import LandingImage1 from "../Assets/other/home4.jpg"
import LandingImage2 from "../Assets/other/home5.jpg"
import LandingImage3 from "../Assets/other/home6.jpg"

const EndemicBirds = () => {
  return (
    <>
        <NavPage />
        <LandingPage 
          images={[LandingImage1, LandingImage2, LandingImage3]} 
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
