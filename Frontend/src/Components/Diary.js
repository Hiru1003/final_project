import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Snackbar, Alert } from '@mui/material';
import PrimaryButton from './PrimaryButton';

const Diary = () => {
  const [birdName, setBirdName] = useState('');
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState('');
  const [notes, setNotes] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [toast, setToast] = useState({ open: false, message: '', severity: 'info' });
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); 

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      setToast({ open: true, message: 'Image uploaded successfully!', severity: 'success' });
    }
  };

  const handleSubmit = () => {
    setToast({ open: true, message: 'Diary entry saved successfully!', severity: 'success' });
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: 'auto' , mt:3 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom textAlign="center">
        Bird Diary
      </Typography>

      {/* Bird Name & Location */}
      <Box sx={{ display: 'flex', gap: 2, mb: 2 , mt:3}}>
        <TextField fullWidth label="Bird Name *" value={birdName} onChange={(e) => setBirdName(e.target.value)} />
        <TextField fullWidth label="Location *" value={location} onChange={(e) => setLocation(e.target.value)} />
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


      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        {/* Notes */}
        <TextField 
            label="Notes" 
            multiline 
            rows={8} 
            value={notes} 
            onChange={(e) => setNotes(e.target.value)} 
            fullWidth 
        />

        {/* Image Drop Area */}
        <Box
            sx={{
            height: 215,
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
            width: '100%' // Ensures it takes up equal width
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


      {/* Save Button */}
      <Box 
        sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            width: '100%', 
            mt: 2, 
            gap: 2 
        }}
    >
        <PrimaryButton width="200px" onClick={handleSubmit}>
            Save
        </PrimaryButton>

        <PrimaryButton width="200px" onClick={handleSubmit}>
            Previous entries
        </PrimaryButton>
    </Box>



      {/* Snackbar for notifications */}
      <Snackbar open={toast.open} autoHideDuration={3000} onClose={() => setToast({ ...toast, open: false })}>
        <Alert severity={toast.severity}>{toast.message}</Alert>
      </Snackbar>
    </Box>
  );
};

export default Diary;
