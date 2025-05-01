import React from 'react';
import { useNavigate } from 'react-router-dom';
import BirdImage from '../Assets/other/login.jpg'; 
import PrimaryButton from './PrimaryButton';

const HomeSection1 = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/all-birds');
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16">
      {/* Text Section */}
      <div className="md:w-[58%] p-4 md:pr-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Learn About Birds</h2>
        <p className="text-lg text-gray-700 mb-4">
          Discover the incredible diversity of birds and their unique features! From vibrant feathers to distinct songs and flight patterns, each bird species offers a glimpse into the wonders of nature. Whether you're a seasoned birdwatcher or just starting, dive in to explore bird identification tips, habitat information, and insights into their behaviors.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          FeatherFinder is more than just a guide — it's your companion on every birding journey. Use our cutting-edge image identification feature to recognize bird species from photos in seconds, making your learning fast and fun.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Keep track of your sightings using our built-in digital diary. Record dates, locations, and personal notes for each encounter. You can even revisit previous entries to monitor changes in migration or seasonal appearances.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Get inspired with curated sighting ideas, including top birding hotspots, seasonal species to watch for, and tips for ethical birdwatching. Our platform also provides comprehensive data on bird behavior, diet, nesting habits, and more.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Whether you're out in the field or exploring from your home, FeatherFinder connects you with a community that shares your curiosity and love for birds. Start exploring and let your birdwatching adventure take flight!
        </p>
        <PrimaryButton width="280px" onClick={handleButtonClick}>
          Learn More About Birds
        </PrimaryButton>
      </div>

      {/* Image Section */}
      <div className="md:w-1/3 p-2 mr-8 flex justify-center mx-auto">
        <img
          src={BirdImage}
          alt="Bird in nature"
          className="w-full max-h-[36rem] rounded-2xl object-cover object-center"
        />
      </div>
    </div>
  );
};

export default HomeSection1;
