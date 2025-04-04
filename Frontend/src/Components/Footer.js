import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook'; // Ensure you have Material Icons installed
import InstagramIcon from '@mui/icons-material/Instagram'; // Ensure you have Material Icons installed
import Logo from '../Assets/logowithoutbg.png'; // Ensure this path is correct

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        bgcolor: '#E1F5FE',
        padding: '20px',
        height: '300px',
      }}
    >
      {/* Left Side: Logo and Tagline in a column layout */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft:5, marginTop:5 }}>
        <img src={Logo} alt="FeatherFinder Logo" style={{ height: '70px', marginBottom: '10px' }} />
        <Typography variant="body2" sx={{ marginBottom: '14px' , marginLeft:1, fontSize:'15px'}}>
          Help you to spy on birds
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Link href="#" sx={{ margin: '0 5px', color: 'inherit' }}>
            <FacebookIcon />
          </Link>
          <Link href="#" sx={{ margin: '0 5px', color: 'inherit' }}>
            <InstagramIcon />
          </Link>
        </Box>
      </Box>

      {/* Right Side: Quick Navigation and Other Links */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',marginTop:5 }}>
        <Box sx={{ marginRight: 4, width: '300px' }}>
            <Typography variant="subtitle1" fontWeight="bold">Quick Navigation</Typography>
            <Link href="/Bird-Identification" sx={{ display: 'block', marginY: 0.8, color: 'inherit', textDecoration: 'none', lineHeight: 2 }}>Bird Identification</Link>
            <Link href="/Visual-Identification" sx={{ display: 'block', marginY: 0.8, color: 'inherit', textDecoration: 'none', lineHeight: 2}}>Visual Identification</Link>
            <Link href="/endemic-birds" sx={{ display: 'block', marginY: 0.8, color: 'inherit', textDecoration: 'none', lineHeight: 2 }}>Endemic Birds</Link>
            <Link href="/all-birds" sx={{ display: 'block', marginY: 0.8, color: 'inherit', textDecoration: 'none', lineHeight: 2}}>All Birds</Link>
        </Box>

        <Box sx={{ marginRight: 4, width: '300px' }}>
            <Typography variant="subtitle1" fontWeight="bold">Other</Typography>
            <Link href="#" sx={{ display: 'block', marginY: 0.8, color: 'inherit', textDecoration: 'none', lineHeight: 2 }}>Feedback</Link>
            <Link href="/login" sx={{ display: 'block', marginY: 0.8, color: 'inherit', textDecoration: 'none', lineHeight: 2 }}>Login</Link>
            <Link href="/signup" sx={{ display: 'block', marginY: 0.8, color: 'inherit', textDecoration: 'none', lineHeight: 2 }}>Signup</Link>
        </Box>
        </Box>


    </Box>
  );
};

export default Footer;
