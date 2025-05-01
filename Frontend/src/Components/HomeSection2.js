import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import BirdCard from './BirdCard';
import { useNavigate } from 'react-router-dom';
import '../Styles/Home.css';

// Import Images
import SriLankaJunglefowl from '../Assets/EndemicBirds/Sri Lanka Junglefowl.webp';
import SriLankaBlueMagpie from '../Assets/EndemicBirds/Sri Lanka Blue Magpie.jpeg';
import SriLankaWoodPigeon from '../Assets/EndemicBirds/SriLankaWoodPigeon.jpg';
import SriLankaHangingParrot from '../Assets/EndemicBirds/Sri Lanka Hanging Parrot.jpeg';
import OrangebilledBabbler from '../Assets/EndemicBirds/OrangebilledBabbler.jpg';
import LayardsParakeet from '../Assets/EndemicBirds/LayardsParakeet.jpg';
import SriLankaWhistlingThrush from '../Assets/EndemicBirds/SriLankaWhistlingThrush.jpg';
import SriLankaScimitarBabbler from '../Assets/EndemicBirds/SriLankaScimitarBabbler.jpg';
import SriLankaSpotwingedThrush from '../Assets/EndemicBirds/SriLankaSpotwingedThrush.webp';
import SriLankaSwallow from '../Assets/EndemicBirds/SriLankaSwallow.jpg';
import PrimaryButton from './PrimaryButton';

// Bird data (10 cards in total)
const birds = [
  { id: 1, name: 'Sri Lanka Junglefowl', image: SriLankaJunglefowl },
  { id: 2, name: 'Sri Lanka Blue Magpie', image: SriLankaBlueMagpie },
  { id: 3, name: 'Sri Lanka Wood Pigeon', image: SriLankaWoodPigeon },
  { id: 4, name: 'Sri Lanka Hanging Parrot', image: SriLankaHangingParrot },
  { id: 5, name: 'Orange-billed Babbler', image: OrangebilledBabbler },
  { id: 6, name: 'Layard’s Parakeet', image: LayardsParakeet },
  { id: 7, name: 'Sri Lanka Whistling Thrush', image: SriLankaWhistlingThrush },
  { id: 8, name: 'Sri Lanka Scimitar Babbler', image: SriLankaScimitarBabbler },
  { id: 9, name: 'Sri Lanka Spot-winged Thrush', image: SriLankaSpotwingedThrush },
  { id: 10, name: 'Sri Lanka Swallow', image: SriLankaSwallow },
];

const HomeSection2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/endemic-birds'); // Replace with your actual path
  };

  // Auto-swipe functionality using setInterval (only 7 swipes total)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Ensure the index doesn't go beyond 6
        return (prevIndex + 1) % 7; // Only 7 positions (4 visible initially, 6 swipes)
      });
    }, 3000); // Change every 3 seconds (3000 ms)

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ p: 3, marginBottom: 5 }}>
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: 11 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ marginTop: 5, marginLeft: 4 }}>
          Explore Endemic Birds
        </Typography>

        <PrimaryButton width="150px" onClick={handleNavigate}>
          View All
        </PrimaryButton>
      </Box>

      {/* Carousel Container */}
      <Box sx={{ display: 'flex', overflow: 'hidden', justifyContent: 'center', position: 'relative', marginLeft: 5, marginBottom: 8 }}>
        <Box
          sx={{
            display: 'flex',
            transition: 'transform 0.5s ease',
            transform: `translateX(-${(currentIndex * 100) / 4}%)`, // Ensures proper swiping within the 7 positions
            width: '100%',
          }}
        >
          {birds.map((bird) => (
            <Box key={bird.id} sx={{ flex: '0 0 25%', padding: '2px' }}>
              <BirdCard bird={bird} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Dot Navigation */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        {Array.from({ length: 7 }).map((_, index) => (
          <Box
            key={index}
            onClick={() => handleDotClick(index)}
            sx={{
              height: '10px',
              width: '10px',
              borderRadius: '50%',
              backgroundColor: currentIndex === index ? '#306FA6' : '#85C6FF',
              margin: '0 5px',
              cursor: 'pointer',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HomeSection2;
