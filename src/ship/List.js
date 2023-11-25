import React from 'react';
import { Link } from 'react-router-dom';
import shipData from '../data/shipData.json';
import './List.css'; // Import the CSS file for styling

const List = () => {
  return (
    <div className="sea-theme">
      <h1 className="title">Graphical List</h1>
      <div className="details">
        <hr className="line" />
        <p className="info">
           Daftar ship Azur Lane .
        </p>
      </div>
      <div className="ship-list">
        {shipData.map(ship => (
          <div key={ship.id} className="ship-item">
            <Link to={`/ship/${ship.id}`}>
              <img src={ship.picture} alt={ship.name} className="ship-picture" />
              <div className="ship-name">{ship.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
