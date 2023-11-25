import React from 'react';
import shipData from '../data/shipData.json';
import { useParams } from 'react-router-dom';
import './Detail.css'; // Import the CSS file for styling
const Detail = () => {
  const { id } = useParams();
  const shipId = parseInt(id, 10); // Convert id to number for comparison
  const ship = shipData.find(ship => ship.id === shipId);

  if (!ship) {
    return <div>Ship not found</div>;
  }
  const playSound = () => {
    const audio = new Audio(ship.soundLink);
    audio.play();
  };

  
  return (
<div  style={{ textAlign: 'center' }}>
      <h1>{ship.name}</h1>
      <div style={{ display: 'inline-block', textAlign: 'left' }}>
      <img src={ship.picture} alt={ship.name}style={{ width: '300px', margin: '10px' }} />  
      
        <table style={{ border: '2px solid black' , margin: '10px', textAlign: 'left' }}>
          <tbody>
            <tr>
              <td>Rarity:</td>
              <td>{ship.Rarity}</td> {/* Add the corresponding field from your JSON */}
            </tr>
            <tr>
              <td>Augment:</td>
              <td>{ship.Augment}</td> {/* Add the corresponding field from your JSON */}
            </tr>
            <tr>
              <td>Classification:</td>
              <td>{ship.Classification}</td> {/* Add the corresponding field from your JSON */}
            </tr>
            <tr>
              <td>Faction:</td>
              <td>{ship.Faction}</td> {/* Add the corresponding field from your JSON */}
            </tr>
            <tr>
              <td>Illustrator:</td>
              <td>{ship.Illustrator}</td> {/* Add the corresponding field from your JSON */}
            </tr>
            <tr>
              <td>Voice Actor:</td>
              <td>{ship.Actor}</td> {/* Add the corresponding field from your JSON */}
            </tr>
            <tr>
              <td>Sound:</td>
              <td>
                <button onClick={playSound}>Play Sound</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Detail;
