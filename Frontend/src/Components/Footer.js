import React from 'react';
import { Box, Typography, Link, useTheme, useMediaQuery } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '../Assets/logowithoutbg.png';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'center', sm: 'center', md: 'flex-start' },
        bgcolor: '#E1F5FE',
        padding: '20px',
        gap: { xs: 4, sm: 4, md: 0 },
        textAlign: { xs: 'center', sm: 'center', md: 'left' },
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          marginLeft: { md: 5 },
          marginTop: 3,
        }}
      >
        <img
          src={Logo}
          alt="FeatherFinder Logo"
          style={{ height: '70px', marginBottom: '10px' }}
        />
        <Typography
          variant="body2"
          sx={{ marginBottom: '14px', fontSize: '15px' }}
        >
          Help you to spy on birds
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
          <Link href="#" sx={{ margin: '0 5px', color: 'inherit' }}>
            <FacebookIcon />
          </Link>
          <Link href="#" sx={{ margin: '0 5px', color: 'inherit' }}>
            <InstagramIcon />
          </Link>
        </Box>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: { xs: 'center', sm: 'flex-start' },
          flexWrap: 'wrap',
          gap: 4,
          marginTop: { xs: 2, sm: 4, md: 5 },
        }}
      >
        {/* Quick Navigation */}
        <Box sx={{ width: '250px' }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Quick Navigation
          </Typography>
          {['Bird-Identification', 'Visual-Identification', 'endemic-birds', 'all-birds'].map((path, idx) => (
            <Link
              key={idx}
              href={`/${path}`}
              sx={{
                display: 'block',
                my: 0.8,
                color: 'inherit',
                textDecoration: 'none',
                lineHeight: 2,
              }}
            >
              {path.replace(/-/g, ' ')}
            </Link>
          ))}
        </Box>

        {/* Other */}
        <Box sx={{ width: '250px' }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Other
          </Typography>
          {['feedback', 'login', 'signup'].map((path, idx) => (
            <Link
              key={idx}
              href={`/${path}`}
              sx={{
                display: 'block',
                my: 0.8,
                color: 'inherit',
                textDecoration: 'none',
                lineHeight: 2,
              }}
            >
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
