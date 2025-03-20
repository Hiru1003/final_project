import React, { useState } from 'react';
import { Box, Typography, Snackbar, Alert } from '@mui/material';
import PrimaryButton from './PrimaryButton';
import axios from 'axios';

const BirdIdentificationByPhotos = () => {
  const [image, setImage] = useState(null);
  const [birdPrediction, setBirdPrediction] = useState('');
  const [toast, setToast] = useState({ open: false, message: '', severity: 'info' });
  const [imagePreview, setImagePreview] = useState('');
  const [searchCompleted, setSearchCompleted] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && isValidImage(file)) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      setToast({ open: true, message: 'Image uploaded successfully!', severity: 'success' });
    } else {
      setToast({ open: true, message: 'Invalid file format. Upload jpg, jpeg, png.', severity: 'error' });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && isValidImage(file)) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      setToast({ open: true, message: 'Image uploaded successfully!', severity: 'success' });
    } else {
      setToast({ open: true, message: 'Invalid file format. Upload jpg, jpeg, png.', severity: 'error' });
    }
  };

  const isValidImage = (file) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    return allowedTypes.includes(file.type);
  };

  const handleUploadClick = async () => {
    if (!image) {
      setToast({ open: true, message: 'Please upload an image.', severity: 'warning' });
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: { 'Accept': 'application/json' },
      });

      if (response.data && response.data.species) {
        setBirdPrediction(response.data.species);
        setSearchCompleted(true);
        setToast({ open: true, message: `Bird identified: ${response.data.species}`, severity: 'success' });
      } else {
        throw new Error('No valid prediction received from API');
      }
    } catch (error) {
      setToast({ open: true, message: `Failed to identify the bird: ${error.response?.data?.error || error.message}`, severity: 'error' });
    }
  };

  const handleTryAnother = () => {
    window.location.reload();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight="bold" align="left" gutterBottom marginTop={8} marginLeft={3}>
        Identify Your Bird By Image
      </Typography>

      <Typography variant="body1" align="left" gutterBottom marginLeft={3} marginRight={3}>
        Have you ever come across a bird and wondered what species it might be? Upload a photo and receive accurate results within seconds.
      </Typography>

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
          position: 'relative',
        }}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {imagePreview ? (
          <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
        ) : (
          <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
            <Typography variant="body1" color="textSecondary">
              Drop Your Photo Here
            </Typography>
          </label>
        )}
        <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFileChange} id="file-input" />
      </Box>

      <Box textAlign="center" sx={{ width: '350px', margin: '0 auto' }}>
        {!searchCompleted ? (
          <PrimaryButton width="350px" onClick={handleUploadClick}>
            Search Bird
          </PrimaryButton>
        ) : (
          <PrimaryButton width="350px" onClick={handleTryAnother}>
            Try Another Bird
          </PrimaryButton>
        )}
      </Box>

      {birdPrediction && (
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="h6">Bird Species: {birdPrediction}</Typography>
        </Box>
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

export default BirdIdentificationByPhotos;
