import React from 'react';
import { Box, Typography } from '@mui/material';
import Signting1 from '../Assets/Sightings/sighting7.jpg';
import Signting2 from '../Assets/Sightings/sighting2.jpeg';
import Signting3 from '../Assets/Sightings/sighting3.jpg';
import Signting4 from '../Assets/Sightings/sighting4.jpg';
import Signting5 from '../Assets/Sightings/sighting6.jpeg';
import PrimaryButton from './PrimaryButton';
import { useNavigate } from 'react-router-dom';

// Define the images and their descriptions
const mainImage = { src: Signting1, description: 'Kumana National Park' };
const smallImages = [
  { src: Signting2, description: 'Sinharaja Rain Forest' },
  { src: Signting3, description: 'Udawalawa National Park' },
  { src: Signting4, description: 'Bundala National Park' },
  { src: Signting5, description: 'Anawilundawa Bird Sanctuary' },
];

const HomeSection3 = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Sightings'); // Replace with your actual path
  };

  return (
    <Box sx={{ padding: '16px', backgroundColor: '#e0f7fa' }}>
      {/* Title and Button Section */}
      <Box
        sx={{
          padding: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginRight: '24px',
          marginLeft: '16px',
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ marginTop: '20px', marginLeft: '16px' }}
        >
          Over 20 sites for you to look at different birds
        </Typography>

        <PrimaryButton width="200px" onClick={handleNavigate}>
          See all sightings
        </PrimaryButton>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '24px',
          margin: '16px 24px',
        }}
      >
        {/* Left Column */}
        <Box sx={{ width: '50%', position: 'relative', marginLeft: '16px' }}>
          <img
            src={mainImage.src}
            alt="Main Sighting"
            style={{
              width: '100%',
              height: 'auto',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
              height: '84%',
            }}
          />
          <Typography
            variant="body2"
            sx={{
              textAlign: 'center',
              color: '#130e01',
              backgroundColor: '#b0cbe2',
              padding: '14px',
              fontWeight: 600,
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
            }}
          >
            {mainImage.description}
          </Typography>
        </Box>

        {/* Right Column */}
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginRight: '16px',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
            {smallImages.slice(0, 2).map((image, index) => (
              <Box key={index} sx={{ width: '47%', textAlign: 'center' }}>
                <img
                  src={image.src}
                  alt={`Sighting ${index + 2}`}
                  style={{
                    width: '100%',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                    height: '70%',
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: '#130e01',
                    backgroundColor: '#b0cbe2',
                    fontWeight: 600,
                    padding: '12px',
                    borderBottomLeftRadius: '10px',
                    borderBottomRightRadius: '10px',
                  }}
                >
                  {image.description}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
            {smallImages.slice(2).map((image, index) => (
              <Box key={index + 2} sx={{ width: '47%', textAlign: 'center' }}>
                <img
                  src={image.src}
                  alt={`Sighting ${index + 4}`}
                  style={{
                    width: '100%',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                    height: '70%',
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: '#130e01',
                    fontWeight: 600,
                    backgroundColor: '#b0cbe2',
                    padding: '12px',
                    borderBottomLeftRadius: '10px',
                    borderBottomRightRadius: '10px',
                  }}
                >
                  {image.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeSection3;
