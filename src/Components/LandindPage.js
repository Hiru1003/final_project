import React from "react";
import '../Styles/LandindPage.css';

const LandingPage = ({ image, heading, paragraph }) => {
  return (
    <div className="landing-page" style={{ backgroundImage: `url(${image})` }}>
      <div className="landing-content">
        <h1 className="landing-heading">{heading}</h1>
        <p className="landing-paragraph">{paragraph}</p>
        
      </div>
    </div>
  );
};

export default LandingPage;
