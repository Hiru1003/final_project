import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, Box } from '@mui/material';
import axios from 'axios';

const Entries = () => {
  const [entries, setEntries] = useState([]);

  // Fetch entries from MongoDB on component mount
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/get_entries'); // Assuming you have an endpoint for this
        setEntries(response.data);
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    };

    fetchEntries();
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h6" fontWeight="bold" align="left" gutterBottom marginTop={8} marginLeft={3}>
        Feathers That You Found !
      </Typography>

      <Typography variant="body1" align="left" gutterBottom marginLeft={3} marginRight={3}>
        Keep track of your birdwatching adventures and observations in one place! Each entry you make is an opportunity to document the birds you've spotted, their locations, and the conditions of the day. Was it a bright and sunny afternoon or a cloudy, overcast morning? What made each bird unique—perhaps its distinctive call, vibrant feathers, or an unusual behavior you noticed? Don't forget to add any extra notes, like the bird's size, the way it moved, or any interactions with other wildlife. With every entry, you're building a beautiful record of your birdwatching experiences, one bird at a time!
      </Typography>

      <br /><br /><br />
      <Grid container spacing={3} sx={{ paddingLeft: 3 }}>
        {entries.map((entry) => (
          <Grid item xs={12} sm={6} key={entry._id}> {/* Adjusted grid item to show 2 cards per row */}
            <Card sx={{ display: 'flex', flexDirection: 'row', height: 300 }}>
              {/* First Column: Bird Image */}
              <CardMedia
                component="img"
                sx={{ width: 300, height: 300, objectFit: 'cover' }}
                image={entry.image_url} // Assuming the image URL is in entry.image_url
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
              </Box>
            </Card>
            <br /><br />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Entries;
