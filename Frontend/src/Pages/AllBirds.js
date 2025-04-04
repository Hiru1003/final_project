import BirdGalleryAllBirds from "../Components/BirdGalleryAllBirds";
import LandingPage from "../Components/LandindPage";
import NavPage from "../Components/Nav";
import landingImage from '../Assets/AllBirds/LongToedStint.jpg'; 
import Footer from "../Components/Footer";

const AllBirds = () => {
  return (
    <>
        <NavPage />
        <LandingPage 
        image= {landingImage}
        heading="All Birds" 
        paragraph={
            <>
              Discover the incredible birdlife of Sri Lanka, where a wide variety of species thrive in the island's diverse landscapes.<br/> From dense forests to peaceful wetlands, these birds display fascinating behaviors and vibrant plumage. 
              <br/>Sri Lanka offers a rich experience for birdwatchers and nature enthusiasts alike.
            </>
          }
      />
        <BirdGalleryAllBirds/>
        <Footer/>
    </>
  );
};

export default AllBirds;
