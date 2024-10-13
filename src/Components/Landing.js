import React from "react";
import '../Styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-heading">Welcome to FeatherFinder</h1>
        <p className="landing-paragraph">
          Discover the world of birds with our cutting-edge bird identification website.<br/>
          Whether you're a beginner or an expert, FeatherFinder helps you explore bird species like never before.
        </p>
        <a href="#explore" className="landing-button">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
