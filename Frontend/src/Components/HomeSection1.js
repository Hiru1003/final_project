import React from 'react';
import BirdImage from '../Assets/illustration/illustration1.png'; 
import PrimaryButton from './PrimaryButton';

const HomeSection1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 ">
      {/* Text Section */}
      <div className="md:w-1/2 p-4 md:pr-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Learn About Birds</h2>
        <p className="text-lg text-gray-700 mb-4">
          Discover the incredible diversity of birds and their unique features! From vibrant feathers to distinct songs and flight patterns, each bird species offers a glimpse into the wonders of nature. Whether you're a seasoned birdwatcher or just starting, dive in to explore bird identification tips, habitat information, and insights into their behaviors.
        </p>
        <p className="text-lg text-gray-700">
          Join us in appreciating these fascinating creatures and learn how to identify birds in your area or beyond. Expand your knowledge and become part of a community passionate about birds and their natural habitats.
        </p>
      
        <PrimaryButton>
          Learn More About Birds
        </PrimaryButton>

      </div>

      {/* Image Section */}
      <div className="md:w-1/3 p-4 flex justify-center mx-auto">
        <img
          src={BirdImage}
          alt="Bird in nature"
          className="w-full h-full  max-h-100"
        />
      </div>
    </div>
  );
};

export default HomeSection1;
