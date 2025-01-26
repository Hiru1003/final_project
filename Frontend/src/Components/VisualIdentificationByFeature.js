import React from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import PrimaryButton from './PrimaryButton';

const VisualIdentificationByFeature = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Heading */}
      <Typography variant="h6" fontWeight="bold" align="left" gutterBottom marginTop={8} marginLeft={3}>
        Identify Your Bird By Visual Identification
      </Typography>

      {/* Paragraph */}
      <Typography variant="body1" align="left" gutterBottom marginLeft={3} marginRight={3}>
        Have you ever come across a bird and wondered what species it might be? With our bird identification system, you can upload a photo and receive accurate results within seconds. Utilizing advanced AI technology, we help you identify a wide range of bird species, providing detailed information about their habitat, behavior, and unique features. Whether you're an avid birdwatcher or a casual nature enthusiast, this tool is designed to make exploring and understanding the avian world both simple and enjoyable.
      </Typography>

      {/* Dropdown Form */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap',overflow: 'visible', marginLeft: 3, marginRight: 5, marginBottom: 1, marginTop:3}}>
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 2 }} key={rowIndex}>
            {Array.from({ length: 3 }).map((_, colIndex) => {
              const labelIndex = rowIndex * 3 + colIndex + 1; // Calculate label from 1-12
              return (
                <FormControl sx={{ width: 350, mb: 2, height: '45px' }} key={colIndex}>
                  <InputLabel 
                    id={`label-${labelIndex}`} 
                    sx={{ 
                      transform: 'translate(14px, 12px) scale(1)', // Adjust position
                      '&.MuiInputLabel-shrink': {
                        transform: 'translate(10px, -6px) scale(0.75)', // Scale and translate for the animate effect
                      },
                      backgroundColor: 'white', // Background to avoid overlap issues
                      zIndex: 1, // Keep it on top
                    }}
                  >
                    {getLabel(labelIndex)}
                  </InputLabel>

                  <Select
                    labelId={`label-${labelIndex}`}
                    id={`select-${labelIndex}`}
                    defaultValue=""
                    sx={{ 
                      '& .MuiSelect-select': { 
                        paddingTop: '9px', // Adjust padding for reduced height
                        paddingBottom: '8px',
                        minHeight: '55px', // Set minHeight for reduced height
                      },
                      height: '50px', // Overall height setting
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {getOptions(labelIndex).map(option => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

              );
            })}
          </Box>
        ))}
      </Box>


     {/* Search Button */}
      <Box 
        textAlign="center" 
        sx={{ width: '350px', margin: '0 auto' }} // Center-align and set fixed width
      >
        <PrimaryButton width="350px" onClick={() => console.log('Clicked!')}>
          Search Bird
        </PrimaryButton>
      </Box>

    </Box>
  );
};

// Function to return the label based on the dropdown index
const getLabel = (index) => {
  switch (index) {
    case 1: return 'Primary Color';
    case 2: return 'Beak Color';
    case 3: return 'Tail Shape';
    case 4: return 'Size';
    case 5: return 'Wing Pattern';
    case 6: return 'Habitat';
    case 7: return 'Leg Color';
    case 8: return 'Head Markings';
    case 9: return 'Body Pattern';
    case 10: return 'Beak Shape';
    case 11: return 'Tail Color';
    case 12: return 'Behavior';
    default: return '';
  }
};

// Function to return the dropdown options based on the label index
const getOptions = (index) => {
  switch (index) {
    case 1: return ['Black', 'White', 'Brown', 'Grey', 'Blue', 'Green', 'Yellow', 'Red', 'Orange', 'Pink', 'Purple', 'Multicolored','Black and White'];
    case 2: return ['Black', 'Yellow', 'Orange', 'Red', 'Grey', 'Blue', 'Brown', 'White'];
    case 3: return ['Rounded', 'Forked', 'Pointed', 'Square', 'Long', 'Short', 'Fan-shaped'];
    case 4: return ['Small (e.g., Sparrow-sized)', 'Medium (e.g., Robin-sized)', 'Large (e.g., Crow-sized)', 'Extra Large (e.g., Eagle-sized)'];
    case 5: return ['Solid', 'Striped', 'Spotted', 'Bars', 'Mottled', 'Plain'];
    case 6: return ['Forest', 'Wetlands', 'Grasslands', 'Urban', 'Coastal', 'Desert', 'Mountains'];
    case 7: return ['Black', 'Yellow', 'Orange', 'Red', 'Pink', 'Grey', 'Brown', 'White'];
    case 8: return ['Plain', 'Striped', 'Crested', 'Cap', 'Mask', 'Patch', 'Eyering'];
    case 9: return ['Solid', 'Spotted', 'Streaked', 'Striped', 'Mottled', 'Iridescent'];
    case 10: return ['Hooked', 'Pointed', 'Conical', 'Flat', 'Curved', 'Long', 'Short'];
    case 11: return ['Black', 'Brown', 'White', 'Grey', 'Yellow', 'Orange', 'Red', 'Blue', 'Green', 'Multicolored','Black and White'];
    case 12: return ['Perching', 'Soaring', 'Wading', 'Swimming', 'Ground Walking', 'Hovering', 'Diving','Drilling' ];
    default: return [];
  }
};

export default VisualIdentificationByFeature;
