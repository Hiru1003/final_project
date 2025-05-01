import NavPage from "../Components/Nav";
import LandingImage1 from "../Assets/other/home13.jpg"
import LandingImage2 from "../Assets/other/home14.jpg"
import LandingImage3 from "../Assets/other/home15.jpg"
import VisualIdentificationByFeature from "../Components/VisualIdentificationByFeature";
import Footer from "../Components/Footer";
import LandingPage from "../Components/LandindPage";

const VisualIdentification = () => {
  return (
    <>
        <NavPage />
        <LandingPage
          images={[LandingImage1, LandingImage2, LandingImage3]} 
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
