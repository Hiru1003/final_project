import BirdGalleryAllBirds from "../Components/BirdGalleryAllBirds";
import LandingPage from "../Components/LandindPage";
import NavPage from "../Components/Nav";
import Footer from "../Components/Footer";
import LandingImage1 from "../Assets/other/home7.jpg"
import LandingImage2 from "../Assets/other/home8.jpg"
import LandingImage3 from "../Assets/other/home9.jpg"

const AllBirds = () => {
  return (
    <>

        <NavPage />
        <LandingPage 
          images={[LandingImage1, LandingImage2, LandingImage3]} 
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
