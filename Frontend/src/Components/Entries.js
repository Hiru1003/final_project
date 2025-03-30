import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { MoreVert, Edit, Delete } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Entries = () => {
  const [entries, setEntries] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const navigate = useNavigate();

  // Fetch entries from MongoDB on component mount
  useEffect(() => {
  
    const fetchEntries = async () => {
      try {
        const userEmail = localStorage.getItem('userEmail');  // Retrieve email from localStorage
        if (!userEmail) {
          console.error("User email is missing. Please log in.");
          return;  // Exit if no user email is found
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

  // Open menu
  const handleMenuOpen = (event, entry) => {
    setAnchorEl(event.currentTarget);
    setSelectedEntry(entry);
  };

  // Close menu
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedEntry(null);
  };

  // Edit function
  const handleEdit = () => {
    navigate('/Bird-Diary', { state: selectedEntry }); // Navigate to the Diary page with the selected entry data
    handleMenuClose();
  };

  // Delete function
  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:5000/delete_entry/${selectedEntry._id}`); // Assuming you have an endpoint for deleting
      setEntries(entries.filter(entry => entry._id !== selectedEntry._id)); // Update the list locally
      handleMenuClose();
    } catch (error) {
      console.error('Error deleting entry:', error);
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
              {/* First Column: Bird Image */}
              <CardMedia
                component="img"
                sx={{ width: 300, height: 300, objectFit: 'cover' }}
                image={entry.image_url}
                alt={entry.bird_name}
              />

              {/* Second Column: Bird Details */}
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

                {/* Menu Options */}
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

      {/* Menu for Edit & Delete */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleEdit}>
          <Edit sx={{ marginRight: 1 }} /> Edit
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <Delete sx={{ marginRight: 1 }} /> Delete
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Entries;
