import LandingPage from "../Components/LandindPage";
import NavPage from "../Components/Nav";
//import landingImage from '../Assets/other/landing2.webp'; 
import HomeSection1 from "../Components/HomeSection1";
import HomeSection2 from "../Components/HomeSection2";
import HomeSection3 from "../Components/HomeSection3";
import Feedback from "../Components/FeedBack";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <>
        <NavPage />
        <LandingPage 
          image= '/Assets/other/landing2.webp' 
          heading="Welcome to FeatherFinder" 
          paragraph={
              <>
                Discover the world of birds with our cutting-edge bird identification website. Whether you're a beginner or an expert,<br />
                FeatherFinder helps you explore bird species like never before.
              </>
          } 
        />

      <HomeSection1/>
      <HomeSection2/>
      <HomeSection3/>
      <Feedback/>
      <Footer/>
    </>
  );
};

export default HomePage;
