import LandingPage from "../Components/LandindPage";
import NavPage from "../Components/Nav";
import LandingImage1 from "../Assets/other/home20.jpg"
import LandingImage2 from "../Assets/other/home21.jpg"
import LandingImage3 from "../Assets/other/home22.jpg"
import SightingGallery from "../Components/SightingGallery";
import Footer from "../Components/Footer";

const SightingPage = () => {
  return (
    <>
        <NavPage />
        <LandingPage
          images={[LandingImage1, LandingImage2, LandingImage3]} 
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
