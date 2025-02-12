import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import FeedbackImage from '../Assets/Feedback.png';

const testimonials = [
    {
      "id": 1,
      "text": "The AI is excellent at identifying well-documented bird species but struggles with rare and region-specific birds. A feature suggesting similar species would improve accuracy. Also, incorporating an option to show alternative names or regional variations would enhance user experience. The AI should also display key distinguishing features to help users understand why a certain bird was identified.",
      "author": "Mr. Frankie Maththew"
    },
    {
      "id": 2,
      "text": "The user interface is smooth and intuitive, making it easy to upload images and get results. However, including a confidence score with each identification would help users assess reliability. Additionally, providing a short explanation of why the AI chose a particular species would increase transparency and trust. A tutorial for new users on how to take the best photos for accurate identification would also be beneficial.",
      "author": "Ms. Sarah Johnson"
    },
    {
      "id": 3,
      "text": "The AI performs well in daylight conditions but struggles in low light or when birds are in flight. Implementing a night mode or an image enhancement feature for dark photos would improve identification accuracy. Also, the system sometimes has difficulty distinguishing between male and female birds of the same species. Including a comparison feature showing slight differences in plumage and size would be helpful.",
      "author": "Mr. Kevin Smith"
    },
    {
      "id": 4,
      "text": "The identification speed is impressive, but additional details about each bird would make the app more educational. Information such as habitat, diet, migration patterns, and conservation status would be useful. It would also help if users could see past identifications and build a personal birdwatching log. Integration with reliable sources like Cornell Lab of Ornithology or Audubon Society would add credibility.",
      "author": "Ms. Emily Clarke"
    },
    {
      "id": 5,
      "text": "Juvenile birds and seasonal plumage variations often cause misidentifications. A feature allowing users to submit feedback or corrections could help train the model. Additionally, community-driven contributions, such as verified expert identifications, could refine accuracy over time. A discussion forum where users can share their experiences and help each other identify tricky species would also be a great addition.",
      "author": "Mr. John Doe"
    }
  ];
  
  

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box sx={{ p: 3, marginBottom: 5, textAlign: 'center' , marginTop:6}}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        What they think about us
      </Typography>
      <Box sx={{ mb: 2, mt:5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={FeedbackImage} alt="Feedback" style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>
      <Box sx={{ fontSize: '18px', margin: '20px 0' , marginTop:5, paddingLeft:40, paddingRight:40}}>
        <Typography>
          {testimonials[currentIndex].text}
        </Typography>
      </Box>
      <Typography variant="subtitle2" fontWeight="700" sx={{marginTop:5, marginBottom:5}}>
        {testimonials[currentIndex].author}
      </Typography>

      {/* Dot Navigation */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        {testimonials.map((_, index) => (
          <Box
            key={index}
            onClick={() => handleDotClick(index)}
            sx={{
              height: '10px',
              width: '10px',
              borderRadius: '50%',
              backgroundColor: currentIndex === index ? '#306FA6' : '#85C6FF',
              margin: '0 5px',
              cursor: 'pointer',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Feedback;
