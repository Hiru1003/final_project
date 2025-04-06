import React, { useState } from 'react';
import NavPage from '../Components/Nav';
import Footer from '../Components/Footer';
import FeedbackImage from '../Assets/illustration/login.jpg';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import PrimaryButton from '../Components/PrimaryButton';

const Feedback = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Snackbar state
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [error, setError] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

// Handle form submission
const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://127.0.0.1:5000/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setSnackbarMessage(result.message || 'Feedback submitted successfully!');
        setError(false);
        setOpenSnackbar(true);
  
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error(result.error || 'Failed to submit feedback.');
      }
    } catch (err) {
      console.error("Feedback submission error", err);
      setSnackbarMessage(err.message || 'Failed to submit feedback.');
      setError(true);
      setOpenSnackbar(true);
    }
  };
  

  return (
    <div>
      <NavPage />
      <div className="flex justify-center items-center min-h-[91vh]">
        <div className="flex w-full max-w-7xl h-[80vh] bg-white shadow-2xl rounded-lg overflow-hidden">
          
          {/* Left Section - Image */}
          <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${FeedbackImage})` }}></div>

          {/* Right Section - Feedback Form */}
          <div className="w-1/2 p-8 flex flex-col justify-start">
            <h2 className="text-5xl font-semibold text-gray-700 mb-10">Feedback</h2>
            <p className="text-gray-600 text-lg mb-6">
              We'd love to hear your thoughts or concerns!
            </p>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-4">
                <TextField
                  label="Name"
                  type="text"
                  name="name"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.name}
                  onChange={handleInputChange}
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
                />
              </div>
              <div className="mb-6">
                <TextField
                  label="Message"
                  name="message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
            
              <div className="w-full">
                <PrimaryButton className="w-full" type="submit">
                    Submit Feedback
                </PrimaryButton>
                </div>


            </form>
          </div>
        </div>
      </div>

      <Footer />

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
    </div>
  );
};

export default Feedback;
