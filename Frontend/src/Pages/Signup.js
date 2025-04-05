import React, { useState } from 'react';
import NavPage from '../Components/Nav';
import Signupimage from '../Assets/Signupimage1.jpg';
import TextField from '@mui/material/TextField';
import { FaGoogle } from "react-icons/fa";
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import PrimaryButton from '../Components/PrimaryButton';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // State for Snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [error, setError] = useState(false); 
  const navigate = useNavigate();


  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://127.0.0.1:5000/signup', formData);
          setSnackbarMessage('User registered successfully!');
          setError(false);
          setOpenSnackbar(true);
          setFormData({
              name: '',
              email: '',
              password: '',
          });

          navigate('/login');
      } catch (error) {
          console.error("There was an error registering the user", error);
          setSnackbarMessage('Error registering user!');
          setError(true);
          setOpenSnackbar(true);
      }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    try {
        const res = await axios.post('http://127.0.0.1:5000/google-login', {
            token: credentialResponse.credential,
        });
        setSnackbarMessage('Google login successful!');
        setError(false);
        setOpenSnackbar(true);
        navigate('/'); 
        // Optionally, handle the response (e.g., navigate to another page)
    } catch (error) {
        console.error("Google login failed", error);
        setSnackbarMessage('Error with Google login!');
        setError(true);
        setOpenSnackbar(true);
    }
  };



  return (
    <>
      <NavPage />
      <div className="flex justify-center items-center min-h-[91vh]">
        <div className="flex w-full max-w-7xl h-[80vh] bg-white shadow-2xl rounded-lg overflow-hidden">
          
          {/* Left Section - Image */}
          <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${Signupimage})` }}>
          </div>
          
          {/* Right Section - Signup Form */}
          <div className="w-1/2 p-8 flex flex-col justify-start">
            <h2 className="text-5xl font-semibold text-gray-700 mb-10">Sign Up</h2>
            <p className="text-gray-600 text-lg mb-6">
              Join us and start your journey today! Sign up to access personalized features, stay updated, and become part of our growing community. We’re excited to have you with us!
            </p>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-4">
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mb-4"
                />
              </div>
              <div className="mb-4">
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mb-4"
                />
              </div>
              <div className="mb-6">
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mb-4"
                />
              </div>
              <div className="w-full">
                <PrimaryButton className="w-full" type="submit">
                  Sign Up
                </PrimaryButton>
              </div>

              <div className="mt-4 w-full">
                <GoogleLogin
                  onSuccess={handleGoogleLogin}
                  onError={() => console.log('Google login failed')}
                  useOneTap
                  size="large"
                  width="100%"
                  text="Sign up with Google"
                />
              </div>

            </form>
          </div>
        </div>
      </div>

      {/* Snackbar for success/error messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity={error ? 'error' : 'success'} onClose={() => setOpenSnackbar(false)}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SignupPage;
