import NavPage from "../Components/Nav";
import landingImage from '../Assets/AllBirds/PurpleSwamphen.jpg'; 
import LandingPage from "../Components/LandindPage";
import VisualIdentificationByFeature from "../Components/VisualIdentificationByFeature";
import Footer from "../Components/Footer";

const VisualIdentification = () => {
  return (
    <>
        <NavPage />
        <LandingPage
          image= {landingImage}
          heading="Visual Identification" 
          paragraph={
              <>
                Discover the fascinating world of avian life with our state-of-the-art bird identification platform. Whether you're an enthusiastic beginner,  <br />an experienced ornithologist, or simply curious,
                FeatherFinder equips you with powerful tools to explore bird species effortlessly. Harness the power of advanced <br />image recognition technology to identify birds from your photos instantly.
              </>
          } 
        />
        <VisualIdentificationByFeature/>
        <Footer/>
    </>
  );
};

export default VisualIdentification;
