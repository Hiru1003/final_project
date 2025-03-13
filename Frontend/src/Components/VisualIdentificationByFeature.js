import React, { useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Snackbar, Alert } from '@mui/material';
import PrimaryButton from './PrimaryButton';

const VisualIdentificationByFeature = () => {
  const [selectedFeatures, setSelectedFeatures] = useState({
    primaryColor: '',
    beakColor: '',
    tailShape: '',
    size: '',
    wingPattern: '',
    habitat: '',
    legColor: '',
    headMarkings: '',
    bodyPattern: '',
    beakShape: '',
    tailColor: '',
    behavior: '',
  });

  const [birdSpecies, setBirdSpecies] = useState('');
  const [toast, setToast] = useState({ open: false, message: '', severity: 'error' });

  const handleSelectChange = (event, label) => {
    setSelectedFeatures({
      ...selectedFeatures,
      [label]: event.target.value,
    });
  };

  const handleSearchBird = async () => {
    // Create an array of selected features, ensuring no empty values are included
    const featuresArray = Object.values(selectedFeatures).filter(value => value !== '');
    
    if (featuresArray.length === 0) {
      setToast({ open: true, message: 'Please select at least one feature before searching.', severity: 'error' });
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/predict_features', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(featuresArray),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Entered Features:', featuresArray);  // Log the entered features
        console.log('Bird Prediction:', data);  // Log the bird prediction

        if (data.species === "Information is not enough to predict the bird.") {
          setBirdSpecies("Sorry, we couldn't identify the bird with the given features.");
        } else {
          setBirdSpecies(data.species);
        }
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        setBirdSpecies("Sorry, there was an error processing your request.");
      }
    } catch (error) {
      console.error('Fetch failed:', error);
      setBirdSpecies("Sorry, there was an error processing your request.");
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight="bold" align="left" gutterBottom marginTop={8} marginLeft={3}>
        Identify Your Bird By Visual Identification
      </Typography>

      <Typography variant="body1" align="left" gutterBottom marginLeft={3} marginRight={3}>
        Have you ever come across a bird and wondered what species it might be? With our bird identification system, you can upload a photo and receive accurate results within seconds. Utilizing advanced AI technology, we help you identify a wide range of bird species, providing detailed information about their habitat, behavior, and unique features. Whether you're an avid birdwatcher or a casual nature enthusiast, this tool is designed to make exploring and understanding the avian world both simple and enjoyable.
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', overflow: 'visible', marginLeft: 3, marginRight: 5, marginBottom: 1, marginTop: 3 }}>
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 2 }} key={rowIndex}>
            {Array.from({ length: 3 }).map((_, colIndex) => {
              const labelIndex = rowIndex * 3 + colIndex + 1;
              return (
                <FormControl sx={{ width: 350, mb: 2, height: '45px' }} key={colIndex}>
                  <InputLabel
                    id={`label-${labelIndex}`}
                    sx={{
                      transform: 'translate(14px, 12px) scale(1)',
                      '&.MuiInputLabel-shrink': {
                        transform: 'translate(10px, -6px) scale(0.75)',
                      },
                      backgroundColor: 'white',
                      zIndex: 1,
                    }}
                  >
                    {getLabel(labelIndex)}
                  </InputLabel>

                  <Select
                    labelId={`label-${labelIndex}`}
                    id={`select-${labelIndex}`}
                    value={selectedFeatures[getLabel(labelIndex).toLowerCase().replace(/\s/g, '')] || ''}
                    onChange={(e) => handleSelectChange(e, getLabel(labelIndex).toLowerCase().replace(/\s/g, ''))}
                    sx={{
                      '& .MuiSelect-select': {
                        paddingTop: '9px',
                        paddingBottom: '8px',
                        minHeight: '55px',
                      },
                      height: '50px',
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {getOptions(labelIndex).map((option) => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              );
            })}
          </Box>
        ))}
      </Box>

      <Box textAlign="center" sx={{ width: '350px', margin: '0 auto' }}>
        <PrimaryButton width="350px" onClick={handleSearchBird}>
          Search Bird
        </PrimaryButton>
      </Box>

      {birdSpecies && (
        <Typography align="center" sx={{ marginTop: 3, fontSize: '16px' }}>
          We found your bird! It can be {birdSpecies}.
        </Typography>
      )}

      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={() => setToast({ ...toast, open: false })} severity={toast.severity} sx={{ width: '100%' }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

const getLabel = (index) => {
  const labels = ['Primary Color', 'Beak Color', 'Tail Shape', 'Size', 'Wing Pattern', 'Habitat', 'Leg Color', 'Head Markings', 'Body Pattern', 'Beak Shape', 'Tail Color', 'Behavior'];
  return labels[index - 1] || '';
};

const getOptions = (index) => {
  const options = [
    ['Black', 'White', 'Brown', 'Grey', 'Blue', 'Green', 'Yellow', 'Red', 'Orange', 'Pink', 'Purple', 'Multicolored', 'Black and White'],
    ['Black', 'Yellow', 'Orange', 'Red', 'Grey', 'Blue', 'Brown', 'White'],
    ['Rounded', 'Forked', 'Pointed', 'Square', 'Long', 'Short', 'Fan-shaped'],
    ['Small', 'Medium', 'Large', 'Extra Large'],
    ['Solid', 'Striped', 'Spotted', 'Bars', 'Mottled', 'Plain'],
    ['Forest', 'Wetlands', 'Grasslands', 'Urban', 'Coastal', 'Desert', 'Mountains'],
    ['Black', 'Yellow', 'Orange', 'Red', 'Pink', 'Grey', 'Brown', 'White'],
    ['Plain', 'Striped', 'Crested', 'Cap', 'Mask', 'Patch', 'Eyering'],
    ['Solid', 'Spotted', 'Streaked', 'Striped', 'Mottled', 'Iridescent'],
    ['Hooked', 'Pointed', 'Conical', 'Flat', 'Curved', 'Long', 'Short'],
    ['Black', 'Brown', 'White', 'Grey', 'Yellow', 'Orange', 'Red', 'Blue', 'Green', 'Multicolored', 'Black and White'],
    ['Perching', 'Soaring', 'Wading', 'Swimming', 'Ground Walking', 'Hovering', 'Diving', 'Drilling'],
  ];
  return options[index - 1] || [];
};

export default VisualIdentificationByFeature;
