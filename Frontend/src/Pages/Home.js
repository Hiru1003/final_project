import LandingPage from "../Components/LandindPage";
import NavPage from "../Components/Nav";
import landingImage from '../Assets/landing2.webp'; 
import HomeSection1 from "../Components/HomeSection1";
import HomeSection2 from "../Components/HomeSection2";
import HomeSection3 from "../Components/HomeSection3";

const HomePage = () => {
  return (
    <>
        <NavPage />
        <LandingPage 
          image= {landingImage}
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
    </>
  );
};

export default HomePage;
