import LandingPage from "../Components/LandindPage";
import NavPage from "../Components/Nav";
import HomeSection1 from "../Components/HomeSection1";
import HomeSection2 from "../Components/HomeSection2";
import HomeSection3 from "../Components/HomeSection3";
import Feedback from "../Components/FeedBack";
import Footer from "../Components/Footer";
import LandingImage1 from "../Assets/other/landing2.webp"
import LandingImage2 from "../Assets/other/home2.jpg"
import LandingImage3 from "../Assets/other/home3.jpg"


const HomePage = () => {
  return (
    <>
        <NavPage />
        <LandingPage 
          images={[LandingImage1, LandingImage2, LandingImage3]} 
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
