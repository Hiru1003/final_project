import React from 'react';
import NavPage from '../Components/Nav';
import Loginimage from '../Assets/login.jpg';
import { FaGoogle } from "react-icons/fa";
import TextField from '@mui/material/TextField';

const LoginPage = () => {
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
              Welcome back, bird enthusiast! Sign in to continue your journey of discovering and identifying beautiful bird species. Let’s dive back into the wonders of bird identification together!
            </p>
            <form className="mt-4">
              <div className="mb-4">
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  required
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
                <FaGoogle className="text-lg" />
                <span>Login with Google</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
