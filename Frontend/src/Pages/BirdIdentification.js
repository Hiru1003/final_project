import LandingPage from "../Components/LandindPage";
import NavPage from "../Components/Nav";
import BirdIdentificationByPhotos from "../Components/BirdIdentificationByPhotos";
import Footer from "../Components/Footer";
import LandingImage1 from "../Assets/other/home10.jpg"
import LandingImage2 from "../Assets/other/home11.jpg"
import LandingImage3 from "../Assets/other/home12.jpg"

const BirdIdentification = () => {
  return (
    <>
        <NavPage />
        <LandingPage
          images={[LandingImage1, LandingImage2, LandingImage3]} 
          heading="Bird Identification" 
          paragraph={
              <>
               Spot a bird, snap a photo, and let Feather Finder reveal its story. From vibrant wings to hidden forest visitors, <br/>discover the birds around you in just a click. Nature is closer than you think — just look up.
              </>
          } 
        />
        <BirdIdentificationByPhotos/>
        <Footer/>
    </>
  );
};

export default BirdIdentification;
