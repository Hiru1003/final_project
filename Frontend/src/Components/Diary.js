import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography, Snackbar, Alert } from '@mui/material';
import axios from 'axios'; // Import Axios
import PrimaryButton from './PrimaryButton';
import { useNavigate, useLocation } from 'react-router-dom';

const Diary = () => {
  const [birdName, setBirdName] = useState('');
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState('');
  const [notes, setNotes] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [toast, setToast] = useState({ open: false, message: '', severity: 'info' });
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const navigate = useNavigate(); 
  const locationState = useLocation().state; // Capture the state passed from Entries

  useEffect(() => {
    if (locationState) {
      // Populate fields with entry data when editing an entry
      setBirdName(locationState.bird_name);
      setLocation(locationState.location);
      setWeather(locationState.weather);
      setNotes(locationState.notes);
      setImagePreview(locationState.image_url);
      setDate(locationState.date);
    }
  }, [locationState]);

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      setToast({ open: true, message: 'Image uploaded successfully!', severity: 'success' });
    }
  };

  // Handle submit and send data to backend
  const handleSubmit = async () => {
    try {
      // Retrieve the logged-in user's email from localStorage (or cookies, if you're using them)
      const userEmail = localStorage.getItem('userEmail');  // Replace with actual key where email is stored
  
      if (!userEmail) {
        console.error("User email is missing. Please log in.");
        return;
      }
  
      const requestData = {
        bird_name: birdName,
        location: location,
        date: date,
        weather: weather,
        notes: notes,
        image_url: imagePreview || null, // Sending the image URL instead of FormData
      };
  
      console.log("Submitting Data:", requestData);
  
      const response = locationState 
        ? await axios.put(`http://127.0.0.1:5000/edit_entry/${locationState._id}`, requestData, {
            headers: { 
              'Content-Type': 'application/json',
              'User-Email': userEmail  // Add the email to the request headers dynamically
            },
          })
        : await axios.post('http://127.0.0.1:5000/add_entry', requestData, {
            headers: { 
              'Content-Type': 'application/json',
              'User-Email': userEmail  // Add the email to the request headers dynamically
            },
          });
  
      if (response.status === 201 || response.status === 200) {
        setToast({ open: true, message: locationState ? 'Diary entry updated successfully!' : 'Diary entry saved successfully!', severity: 'success' });
  
        // Reset the form after successful save
        setBirdName('');
        setLocation('');
        setWeather('');
        setNotes('');
        setImage(null);
        setImagePreview('');
        setDate(new Date().toISOString().split('T')[0]); // Reset date to today's date
      }
    } catch (error) {
      console.error('Error submitting diary entry:', error);
      setToast({ open: true, message: 'Failed to save entry', severity: 'error' });
    }
  };
  

  const handlePreviousEntries = () => {
    navigate('/SaveBirds');  // Navigate to the Previous Entries page
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: 'auto', mt: 3 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom textAlign="center">
        Bird Diary
      </Typography>

      {/* Bird Name & Location */}
      <Box sx={{ display: 'flex', gap: 2, mb: 2, mt: 3 }}>
        <TextField
          fullWidth
          label="Bird Name *"
          value={birdName}
          onChange={(e) => setBirdName(e.target.value)}
        />
        <TextField
          fullWidth
          label="Location *"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Box>

      {/* Date & Weather */}
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          fullWidth
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          fullWidth
          label="Weather"
          value={weather}
          onChange={(e) => setWeather(e.target.value)}
        />
      </Box>

      {/* Notes */}
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label="Notes"
          multiline
          rows={14}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          fullWidth
        />
        {/* Image Drop Area */}
        <Box
          sx={{
            height: 352,
            border: '2px dashed gray',
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            cursor: 'pointer',
            mb: 3,
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
          }}
          onClick={() => document.getElementById('file-input').click()}
        >
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <Typography color="textSecondary">Click or Drag to Upload Photo</Typography>
          )}
        </Box>

        <input
          type="file"
          id="file-input"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </Box>

      {/* Save/Edit Button */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          mt: 2,
          gap: 2,
        }}
      >
        <PrimaryButton width="200px" onClick={handleSubmit}>
          {locationState ? 'Edit' : 'Save'}
        </PrimaryButton>
        <PrimaryButton width="200px" onClick={handlePreviousEntries}>
          Previous entries
        </PrimaryButton>
      </Box>

      {/* Snackbar for notifications */}
      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity={toast.severity}>{toast.message}</Alert>
      </Snackbar>
    </Box>
  );
};

export default Diary;
