import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavPage from '../Components/Nav';
import LandingPage from '../Components/LandindPage';
// import landingImage from '../Assets/other/landing8.jpg'; 
import Diary from '../Components/Diary';
import Footer from '../Components/Footer';
import PrimaryButton from '../Components/PrimaryButton';

const BirdDiary = () => {
  const navigate = useNavigate();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false); // State for showing login prompt
  const userName = localStorage.getItem('userName'); 

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      setShowLoginPrompt(true); // Show the login prompt if the user is not logged in
    }
  }, []);

  const handleSignIn = () => {
    navigate('/login'); // Redirect to login page
  };

  const handleCancel = () => {
    navigate('/'); // Redirect to home page or another page if user cancels
  };

  return (
    <div>
      <NavPage />
      
      {/* Show the login prompt if the user is not logged in */}
      {showLoginPrompt ? (
        <div className="login-prompt">
          <LandingPage 
            image= '/Assets/other/landing8.jpg' 
            heading="Access Your Bird Diary Today!"
            paragraph={
              <>
                To continue exploring your birding memories and documenting your adventures, please sign in.
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px', width: '100%', maxWidth: '450px', marginLeft: 'auto', marginRight: 'auto' }}>
                  <PrimaryButton width="250px" onClick={handleSignIn}>
                    Sign In
                  </PrimaryButton>
                  <PrimaryButton width="250px" onClick={handleCancel}>
                    Take Me Home
                  </PrimaryButton>
                </div>
              </>
            }
          />
        </div>
      ) : (
        <LandingPage 
        image= '/Assets/other/landing8.jpg' 
          heading={userName ? `Hi ${userName}, ready to write today’s birding memories?` : 'Welcome to Bird Diary'}
          paragraph={
              <>
                  Every bird has a story — now it’s your turn. Record your birdwatching adventures, capture rare sightings, and treasure your moments in nature.<br/> Your Bird Diary keeps memories alive, one feathered friend at a time.
              </>
          } 
        />
      )}

      {/* Only show the Diary and Footer if the user is logged in */}
      {!showLoginPrompt && (
        <>
          <Diary />
          <Footer />
        </>
      )}
    </div>
  );
};

export default BirdDiary;
