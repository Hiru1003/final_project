import LandingPage from "../Components/LandindPage";
import NavPage from "../Components/Nav";
import landingImage from '../Assets/other/landing6.jpeg'; 
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
