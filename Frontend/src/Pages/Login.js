import React, { useState } from 'react';
import NavPage from '../Components/Nav';
import Loginimage from '../Assets/other/login.jpg';
import { FaGoogle } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import PrimaryButton from '../Components/PrimaryButton';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // State for Snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [error, setError] = useState(false); // State to manage error or success


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
    console.log('Login data being sent:', formData); 
  
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', formData);
  
      // If login is successful, store the email in localStorage
      if (response.status === 200) {
        localStorage.setItem('userEmail', formData.email); 
        localStorage.setItem('userName', response.data.name); 

        console.log('Stored UserEmail:', localStorage.getItem('userEmail'));
        console.log('Stored UserName:', localStorage.getItem('userName'));
  
        setSnackbarMessage('Login successful!');
        setError(false); 
        setOpenSnackbar(true); 
        setFormData({
          email: '',
          password: '',
        });

        navigate('/');

      }
    } catch (error) {
      console.error("There was an error logging in", error);
      setSnackbarMessage('Error logging in!');
      setError(true); // Error occurred, show error message
      setOpenSnackbar(true); // Show Snackbar
    }
  };
  

  return (
    <>
      <NavPage />
      <div className="flex justify-center items-center min-h-[91vh]">
        <div className="flex w-full max-w-7xl h-[80vh] bg-white shadow-2xl rounded-lg overflow-hidden">
          
          {/* Left Section - Image */}
          <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${Loginimage})` }}>
          </div>
          
          {/* Right Section - Login Form */}
          <div className="w-1/2 p-8 flex flex-col justify-start">
            <h2 className="text-5xl font-semibold text-gray-700 mb-10">Login</h2>
            <p className="text-gray-600 text-lg mb-6">
              Welcome back! Sign in to continue your journey.
            </p>
            <form onSubmit={handleSubmit} className="mt-4">
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
                  Login
                </PrimaryButton>
              </div>


              <button
                type="button"
                className="w-full mt-3 bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <FaGoogle className="text-lg" />
                <span>Login with Google</span>
              </button>
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

export default LoginPage;