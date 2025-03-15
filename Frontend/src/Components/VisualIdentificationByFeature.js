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
    const featuresArray = Object.values(selectedFeatures).filter(value => value !== '');
    
    if (featuresArray.length === 0) {
      setToast({ open: true, message: 'Please select at least one feature before searching.', severity: 'error' });
      return;
    }
  
    try {
      const response = await fetch('http://127.0.0.1:5000/predict_features', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(featuresArray),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Entered Features:', featuresArray);
        console.log('Bird Prediction:', data);
  
        if (data.species === "Information is not enough to predict the bird.") {
          setBirdSpecies("Sorry, we couldn't identify the bird with the given features.");
        } else {
          setBirdSpecies(data.species);
        }
      } else {
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
        Have you ever come across a bird and wondered what species it might be? With our bird identification system, you can select features and receive accurate results.
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: 3, marginRight: 5, marginBottom: 1, marginTop: 3 }}>
        {Object.keys(selectedFeatures).map((key, index) => (
          index % 3 === 0 && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 2 }} key={index}>
              {Object.keys(selectedFeatures).slice(index, index + 3).map((feature, colIndex) => (
                <FormControl sx={{ width: 350, mb: 2 }} key={feature}>
                  <InputLabel>{getLabel(feature)}</InputLabel>
                  <Select
                    value={selectedFeatures[feature] || ''}
                    onChange={(e) => handleSelectChange(e, feature)}
                    sx={{ height: '50px' }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {getOptions(feature).map((option) => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ))}
            </Box>
          )
        ))}
      </Box>

      <Box textAlign="center" sx={{ width: '350px', margin: '0 auto' }}>
        <PrimaryButton width="350px" onClick={handleSearchBird}>Search Bird</PrimaryButton>
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

const getLabel = (feature) => {
  const labels = {
    primaryColor: 'Primary Color', beakColor: 'Beak Color', tailShape: 'Tail Shape', size: 'Size',
    wingPattern: 'Wing Pattern', habitat: 'Habitat', legColor: 'Leg Color', headMarkings: 'Head Markings',
    bodyPattern: 'Body Pattern', beakShape: 'Beak Shape', tailColor: 'Tail Color', behavior: 'Behavior'
  };
  return labels[feature] || '';
};

const getOptions = (feature) => {
  const options = {
    primaryColor: ['Black', 'White', 'Brown', 'Grey', 'Blue', 'Green', 'Yellow', 'Red'],
    beakColor: ['Black', 'Yellow', 'Orange', 'Red', 'Grey', 'Blue', 'Brown', 'White'],
    tailShape: ['Rounded', 'Forked', 'Pointed', 'Square', 'Long', 'Short', 'Fan-shaped'],
    size: ['Small', 'Medium', 'Large', 'Extra Large'],
    wingPattern: ['Solid', 'Striped', 'Spotted', 'Bars', 'Mottled', 'Plain'],
    habitat: ['Forest', 'Wetlands', 'Grasslands', 'Urban', 'Coastal', 'Desert', 'Mountains'],
    legColor: ['Black', 'Yellow', 'Orange', 'Red', 'Pink', 'Grey', 'Brown', 'White'],
    headMarkings: ['Plain', 'Striped', 'Crested', 'Cap', 'Mask', 'Patch', 'Eyering'],
    bodyPattern: ['Solid', 'Spotted', 'Streaked', 'Striped', 'Mottled', 'Iridescent'],
    beakShape: ['Hooked', 'Pointed', 'Conical', 'Flat', 'Curved', 'Long', 'Short'],
    tailColor: ['Black', 'Brown', 'White', 'Grey', 'Yellow', 'Orange', 'Red'],
    behavior: ['Perching', 'Soaring', 'Wading', 'Swimming', 'Hovering', 'Diving'],
  };
  return options[feature] || [];
};

export default VisualIdentificationByFeature;