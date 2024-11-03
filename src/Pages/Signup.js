import React from 'react'
import NavPage from '../Components/Nav';
import Signupimage from '../Assets/Signupimage1.jpg';

const SignupPage = () => {
  return (
    <>
      <NavPage />
      <div className="flex justify-center items-center min-h-[91vh]">
        <div className="flex w-full max-w-7xl h-[80vh] bg-white shadow-lg rounded-lg overflow-hidden">
          
          {/* Left Section - Image */}
          <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${Signupimage})` }}>
          </div>
          
          {/* Right Section - Login Form */}
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-5xl font-semibold text-gray-700 mb-10">Signup</h2>
            <form className="mt-4">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Email:</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Password:</label>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
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
                className="w-full mt-3 bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
              >
                Login with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
  };

export default SignupPage
