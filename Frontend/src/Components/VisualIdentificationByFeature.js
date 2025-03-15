import React, { useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Snackbar, Alert, CircularProgress } from '@mui/material';
import PrimaryButton from './PrimaryButton';

const VisualIdentificationByFeature = () => {
  const [birdSpecies, setBirdSpecies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setBirdSpecies(null);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict_features', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}) // Add selected dropdown values here
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch bird identification');
      }
      
      const data = await response.json();
      setBirdSpecies(data.birdSpecies || 'Unknown Species');
    } catch (error) {
      setError(error.message);
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

      <Typography variant="body1" align="left" gutterBottom marginLeft={3} marginRight={3}>
        Have you ever come across a bird and wondered what species it might be? With our bird identification system, you can upload a photo and receive accurate results within seconds.
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', overflow: 'visible', marginLeft: 3, marginRight: 5, marginBottom: 1, marginTop: 3 }}>
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 2 }} key={rowIndex}>
            {Array.from({ length: 3 }).map((_, colIndex) => {
              const labelIndex = rowIndex * 3 + colIndex + 1;
              return (
                <FormControl sx={{ width: 350, mb: 2, height: '45px' }} key={colIndex}>
                  <InputLabel id={`label-${labelIndex}`} sx={{ backgroundColor: 'white', zIndex: 1 }}>
                    {getLabel(labelIndex)}
                  </InputLabel>
                  <Select labelId={`label-${labelIndex}`} id={`select-${labelIndex}`} defaultValue="">
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

      <Box textAlign="center" sx={{ width: '350px', margin: '0 auto' }}>
        <PrimaryButton width="350px" onClick={handleSearch} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Search Bird'}
        </PrimaryButton>
      </Box>

      {birdSpecies && (
        <Typography align="center" sx={{ marginTop: 3, fontSize: '16px' }}>
          We found your bird! It can be {birdSpecies}.
        </Typography>
      )}

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity="error" onClose={() => setOpenSnackbar(false)}>
          {error}
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
