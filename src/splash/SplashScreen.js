import React from 'react';
import { Link } from 'react-router-dom';
import './SplashScreen.css'; // Import CSS for styling

const SplashScreen = () => {
  return (
    <div className="splash-container">
      <div className="button-container">
        <Link to="/ship" className="big-button ship">
          <span>ship</span>
        </Link>
        <Link to="/events" className="big-button event">
          <span>Event</span>
        </Link>
        <Link to="/about" className="big-button about">
          <span>About</span>
        </Link>
      </div>
    </div>
  );
};

export default SplashScreen;
