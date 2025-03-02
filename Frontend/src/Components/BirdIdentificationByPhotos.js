import React, { useState } from 'react';
import { Box, Typography, Snackbar, Alert } from '@mui/material';
import PrimaryButton from './PrimaryButton';
import axios from 'axios';


const BirdIdentificationByPhotos = () => {
  const [image, setImage] = useState(null);
  const [birdPrediction, setBirdPrediction] = useState('');
  const [toast, setToast] = useState({ open: false, message: '', severity: 'info' });

  // Handle image drop
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && isValidImage(file)) {
      setImage(file);
      setToast({ open: true, message: 'Image uploaded successfully!', severity: 'success' });
    } else {
      setToast({ open: true, message: 'Invalid file format. Upload jpg, jpeg, png.', severity: 'error' });
    }
  };

  // Handle file input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && isValidImage(file)) {
      setImage(file);
      setToast({ open: true, message: 'Image uploaded successfully!', severity: 'success' });
    } else {
      setToast({ open: true, message: 'Invalid file format. Upload jpg, jpeg, png.', severity: 'error' });
    }
  };

  // Validate Image Format
  const isValidImage = (file) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    return allowedTypes.includes(file.type);
  };

  // Handle Upload
  const handleUploadClick = async () => {
    if (!image) {
        setToast({ open: true, message: 'Please upload an image.', severity: 'warning' });
        return;
    }

    const formData = new FormData();
    formData.append("image", image); // Ensure the key matches backend expectations

    console.log('Uploading:', image.name, image.type); // Debugging

    try {
        const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
            headers: {
                'Accept': 'application/json',
            },
        });

        console.log('API Response:', response.data); // Debugging

        if (response.data && response.data.species) {
            setBirdPrediction(response.data.species);
            setToast({ open: true, message: `Bird identified: ${response.data.species}`, severity: 'success' });
        } else {
            throw new Error('No valid prediction received from API');
        }
    } catch (error) {
        console.error('Error uploading image:', error.response?.data || error.message);
        setToast({ open: true, message: `Failed to identify the bird: ${error.response?.data?.error || error.message}`, severity: 'error' });
    }
};


  return (
    <Box sx={{ p: 3 }}>
      {/* Heading */}
      <Typography variant="h6" fontWeight="bold" align="left" gutterBottom marginTop={8} marginLeft={3}>
        Identify Your Bird By Image
      </Typography>

      {/* Paragraph */}
      <Typography variant="body1" align="left" gutterBottom marginLeft={3} marginRight={3}>
        Have you ever come across a bird and wondered what species it might be? Upload a photo and receive accurate results within seconds.
      </Typography>

      {/* Drop Area */}
      <Box
        sx={{
          width: 700,
          height: 500,
          border: '2px dashed gray',
          borderRadius: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          mx: 'auto',
          my: 4,
        }}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
          <Typography variant="body1" color="textSecondary">
            Drop Your Photo Here
          </Typography>
        </label>
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          id="file-input"
        />
      </Box>

      {/* Search Button */}
      <Box textAlign="center" sx={{ width: '350px', margin: '0 auto' }}>
        <PrimaryButton width="350px" onClick={handleUploadClick}>
          Search Bird
        </PrimaryButton>
      </Box>

      {/* Display Prediction */}
      {birdPrediction && (
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="h6">Bird Species: {birdPrediction}</Typography>
        </Box>
      )}

      {/* Toast Notification (Top-Right) */}
      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Move to top-right
      >
        <Alert onClose={() => setToast({ ...toast, open: false })} severity={toast.severity} sx={{ width: '100%' }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BirdIdentificationByPhotos;