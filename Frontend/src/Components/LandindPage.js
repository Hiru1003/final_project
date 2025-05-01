import React, { useState, useEffect } from "react";
import '../Styles/LandindPage.css';

const LandingPage = ({ images, heading, paragraph }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="landing-page"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="landing-content">
        <h1 className="landing-heading">{heading}</h1>
        <p className="landing-paragraph">{paragraph}</p>
      </div>
    </div>
  );
};

export default LandingPage;
