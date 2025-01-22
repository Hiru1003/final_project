import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import PrimaryButton from './PrimaryButton';

const BirdIdentificationByPhotos = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Heading */}
      <Typography variant="h6" fontWeight="bold" align="left" gutterBottom marginTop={8} marginLeft={3}>
        Identify Your Bird By Image
      </Typography>

      {/* Paragraph */}
      <Typography variant="body1" align="left" gutterBottom marginLeft={3} marginRight={3}>
        Have you ever come across a bird and wondered what species it might be? With our bird identification system, you can upload a photo and receive accurate results within seconds. 
        Utilizing advanced AI technology, we help you identify a wide range of bird species, providing detailed information about their habitat, behavior, and unique features. 
        Whether you're an avid birdwatcher or a casual nature enthusiast, this tool is designed to make exploring and understanding the avian world both simple and enjoyable.
      </Typography>


      {/* Drop Area */}
      <Box
        sx={{
          width: 700,
          height: 500,
          border: '2px dashed gray',
          borderRadius:4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          mx: 'auto',
          my: 4,
        }}
      >
        <Typography variant="body1" color="textSecondary">
          Drop Your Photo Here
        </Typography>
      </Box>

      {/* Search Button */}
      <Box textAlign="center">
        <PrimaryButton>
            Search Bird
        </PrimaryButton>
      </Box>
    </Box>
  );
};

export default BirdIdentificationByPhotos;