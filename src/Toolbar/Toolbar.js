import React from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css'; // Import the CSS file for styling

const Toolbar = () => {
  return (
    <div className="toolbar">
      {/* Link to EventList component in the events folder */}
      <Link to="/events">Event</Link>
      <Link to="/ship">Ship</Link>
      <Link to="/about">About</Link>
            {/* Home button */}
      <Link to="/" className="home-button">
        Home
      </Link>
    </div>
  );
};
export default Toolbar;
