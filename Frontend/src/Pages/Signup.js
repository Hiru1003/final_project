import React from 'react';
import NavPage from '../Components/Nav';
import Signupimage from '../Assets/Signupimage1.jpg';
import TextField from '@mui/material/TextField';

const SignupPage = () => {
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
            <h2 className="text-5xl font-semibold text-gray-700 mb-10">Signup</h2>
            <p className="text-gray-600 text-lg mb-6">
              Join us and start your journey today! Sign up to access personalized features, stay updated, and become part of our growing community. We’re excited to have you with us!
            </p>
            <form className="mt-4">
              <div className="mb-4">
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  required
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
                  className="mb-4"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                Login
              </button>
              <button
                type="button"
                className="w-full mt-3 bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Login with Google</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
