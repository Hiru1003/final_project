import LandingPage from "../Components/LandindPage";
import NavPage from "../Components/Nav";
import landingImage from '../Assets/landing2.webp'; 
import HomeSection1 from "../Components/HomeSection1";

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
    </>
  );
};

export default HomePage;
