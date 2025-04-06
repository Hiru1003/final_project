import React, { useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Snackbar, Alert, CircularProgress } from '@mui/material';
import PrimaryButton from './PrimaryButton';

const VisualIdentificationByFeature = () => {
  const [birdSpecies, setBirdSpecies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [formValues, setFormValues] = useState({});

  const handleChange = (index, value) => {
    setFormValues(prevValues => ({ ...prevValues, [index]: value }));
  };

  const handleSearch = async () => {
    if (Object.keys(formValues).length < 12) {
      setSnackbarMessage('Please fill out the entire form before searching.');
      setOpenSnackbar(true);
      return;
    }
  
    console.log("User Input Values:", Object.values(formValues)); // Ensure data format
  
    setLoading(true);
    setError(null);
    setBirdSpecies(null);
  
    try {
      const response = await fetch('http://127.0.0.1:5000/predict_features', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.values(formValues)) // Send as an array
      });
  
      const data = await response.json();
      if (data.species) {
        setBirdSpecies(data.species);
      } else {
        setBirdSpecies("The system couldn't confidently identify a bird. The information may be incorrect.");
      }
    } catch (error) {
      console.error("API Error:", error);
      setError(error.message);
      setSnackbarMessage('Error fetching bird identification. Please try again.');
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight="bold" align="left" gutterBottom marginTop={8} marginLeft={3}>
        Identify Your Bird By Visual Identification
      </Typography>

      <Typography variant="body1" align="left" gutterBottom marginLeft={3} marginRight={3} marginBottom={10}>
        Spotted a bird and curious about its species? Take a moment to recall its features! Was it a vibrant splash of red darting through the trees, or a subtle shade of brown blending into the forest? Did it have a sleek, pointed beak built for precision, or a curved one suited for cracking seeds? Notice its wings—were they patterned with stripes, speckled with spots, or a solid shade? How about its tail—long and elegant, short and fan-like, or forked at the tip? Even the smallest details, like leg color or markings on the head, can help uncover its identity. Simply select the characteristics that stood out to you, and let's solve the mystery of your feathered visitor together!
      </Typography>




      <Box sx={{ display: 'flex', flexWrap: 'wrap', overflow: 'visible', marginLeft: 3, marginRight: 5, marginBottom: 1, marginTop: 5 }}>
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 2 }} key={rowIndex}>
            {Array.from({ length: 3 }).map((_, colIndex) => {
              const labelIndex = rowIndex * 3 + colIndex + 1;
              return (
                <FormControl sx={{ width: 350, mb: 2, height: '45px' }} key={colIndex}>
                  <InputLabel id={`label-${labelIndex}`} sx={{ backgroundColor: 'white', zIndex: 1 }}>
                    {getLabel(labelIndex)}
                  </InputLabel>
                  <Select
                    labelId={`label-${labelIndex}`}
                    id={`select-${labelIndex}`}
                    defaultValue=""
                    onChange={(e) => handleChange(labelIndex, e.target.value)}
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

      <Box textAlign="center" sx={{ width: '350px', margin: '0 auto', marginBottom:5 }}>
        <PrimaryButton width="350px" onClick={handleSearch} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Search Bird'}
        </PrimaryButton>
      </Box>

      {birdSpecies && (
        <Typography align="center" sx={{ marginTop: 3, fontSize: '16px' }}>
         We found your bird. It might be {birdSpecies}
        </Typography>
      )}

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity={error ? 'error' : 'warning'} onClose={() => setOpenSnackbar(false)}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

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

const getOptions = (index) => {
  switch (index) {
    case 1: return ['Black', 'White', 'Brown', 'Grey', 'Blue', 'Green', 'Yellow', 'Red', 'Orange', 'Pink', 'Purple', 'Multicolored', 'Black and White'];
    case 2: return ['Black', 'Yellow', 'Orange', 'Red', 'Grey', 'Blue', 'Brown', 'White'];
    case 3: return ['Rounded', 'Forked', 'Pointed', 'Square', 'Long', 'Short', 'Fan-shaped'];
    case 4: return ['Small', 'Medium', 'Large', 'Extra Large'];
    case 5: return ['Solid', 'Striped', 'Spotted', 'Bars', 'Mottled', 'Plain'];
    case 6: return ['Forest', 'Wetlands', 'Grasslands', 'Urban', 'Coastal', 'Desert', 'Mountains'];
    case 7: return ['Black', 'Yellow', 'Orange', 'Red', 'Pink', 'Grey', 'Brown', 'White'];
    case 8: return ['Plain', 'Striped', 'Crested', 'Cap', 'Mask', 'Patch', 'Eyering'];
    case 9: return ['Solid', 'Spotted', 'Streaked', 'Striped', 'Mottled', 'Iridescent'];
    case 10: return ['Hooked', 'Pointed', 'Conical', 'Flat', 'Curved', 'Long', 'Short'];
    case 11: return ['Black', 'Brown', 'White', 'Grey', 'Yellow', 'Orange', 'Red', 'Blue', 'Green', 'Multicolored', 'Black and White'];
    case 12: return ['Perching', 'Soaring', 'Wading', 'Swimming', 'Ground Walking', 'Hovering', 'Diving', 'Drilling'];
    default: return [];
  }
};

export default VisualIdentificationByFeature;
