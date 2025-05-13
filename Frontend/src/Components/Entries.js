import React, { useEffect, useState } from 'react';
import {
  Card, CardContent, CardMedia, Grid, Typography,
  Box, IconButton, Menu, MenuItem, Snackbar, Alert
} from '@mui/material';
import { MoreVert, Edit, Delete } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Entries = () => {
  const [entries, setEntries] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [toast, setToast] = useState({ open: false, message: '', severity: 'success' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const userEmail = localStorage.getItem('userEmail');
        if (!userEmail) {
          console.error("User email is missing.");
          return;
        }

        const response = await axios.get('http://127.0.0.1:5000/get_entries', {
          headers: { 'User-Email': userEmail }
        });

        setEntries(response.data);
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    };

    fetchEntries();
  }, []);

  const handleMenuOpen = (event, entry) => {
    setAnchorEl(event.currentTarget);
    setSelectedEntry(entry);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedEntry(null);
  };

  const handleEdit = async () => {
    if (!selectedEntry || !selectedEntry._id) return;
  
    try {
      // Send the PUT request to update the entry
      const response = await axios.put(
        `http://127.0.0.1:5000/edit_entry/${selectedEntry._id}`,
        {
          user_email: selectedEntry.user_email,
          bird_name: selectedEntry.bird_name,
          location: selectedEntry.location,
          date: selectedEntry.date,
          weather: selectedEntry.weather,
          notes: selectedEntry.notes,
          image_url: selectedEntry.image_url,
        }
      );
  
      // If the update is successful
      if (response.status === 200) {
        // Show success message
        setToast({ open: true, message: 'Entry Edited successfully!', severity: 'success' });
  
        // Populate the form with the updated entry and navigate to the Bird-Diary page
        navigate('/Bird-Diary', { state: { ...selectedEntry, updated: true } }); // Passing state to navigate
  
      }
    } catch (error) {
      // Show error message in case of failure
      console.error('Failed to update entry:', error);
      setToast({ open: true, message: 'Failed to update entry.', severity: 'error' });
    } finally {
      handleMenuClose();
    }
  };
  

  const handleDelete = async () => {
    try {
      if (!selectedEntry?._id) {
        console.error('Selected entry does not have a valid _id:', selectedEntry);
        return;
      }

      await axios.delete(`http://127.0.0.1:5000/delete_entry/${selectedEntry._id}`, {
        headers: { 'User-Email': localStorage.getItem('userEmail') }
      });

      setEntries(prev => prev.filter(entry => entry._id !== selectedEntry._id));
      setToast({ open: true, message: 'Entry Deleted successfully!', severity: 'success' });
    } catch (error) {
      console.error('Error deleting entry:', error);
      setToast({ open: true, message: 'Failed to delete entry.', severity: 'error' });
    } finally {
      handleMenuClose();
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h6" fontWeight="bold" align="left" gutterBottom marginTop={8} marginLeft={3}>
        Feathers That You Found!
      </Typography>

      <Typography variant="body1" align="left" gutterBottom marginLeft={3} marginRight={3}>
        Keep track of your birdwatching adventures and observations in one place! Each entry you make is an opportunity to document the birds you've spotted...
      </Typography>

      <br /><br /><br />

      <Grid container spacing={3} sx={{ paddingLeft: 3 }}>
        {entries.map((entry) => (
          <Grid item xs={12} sm={6} key={entry._id}>
            <Card sx={{ display: 'flex', flexDirection: 'row', height: 300, position: 'relative' }}>
              <CardMedia
                component="img"
                sx={{ width: 300, height: 300, objectFit: 'cover' }}
                image={entry.image_url}
                alt={entry.bird_name}
              />

              <Box sx={{ padding: 2, flex: 1 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" align="left" gutterBottom>
                    {entry.bird_name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Location:</strong> {entry.location}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Date:</strong> {entry.date}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Weather:</strong> {entry.weather}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    <strong>Notes:</strong> {entry.notes}
                  </Typography>
                </CardContent>

                <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
                  <IconButton onClick={(event) => handleMenuOpen(event, entry)}>
                    <MoreVert />
                  </IconButton>
                </Box>
              </Box>
            </Card>
            <br /><br />
          </Grid>
        ))}
      </Grid>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleEdit}>
          <Edit sx={{ marginRight: 1 }} /> Edit
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <Delete sx={{ marginRight: 1 }} /> Delete
        </MenuItem>
      </Menu>

      {/* Snackbar Toast */}
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

export default Entries;
