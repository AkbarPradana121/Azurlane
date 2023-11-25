import React from 'react';
import eventData from '../data/eventData.json';
import { useParams } from 'react-router-dom';
import './EventDetail.css'; // Import the CSS file for styling

const EventDetail = () => {
  const { id } = useParams();
  const eventId = parseInt(id, 10); // Convert id to number for comparison
  const event = eventData.find(event => event.id === eventId);

  if (!event) {
    return <div>Event not found</div>;
  }
  const playSound = () => {
    const audio = new Audio(event.soundLink);
    audio.play();
  };

  
  return (
<div  style={{ textAlign: 'center' }}>
      <h1>{event.name}</h1>
      <div style={{ display: 'inline-block', textAlign: 'left' }}>
      <img src={event.picture} alt={event.name}style={{ width: '300px', margin: '10px' }} />  
      
        <table style={{ border: '2px solid black' , margin: '10px', textAlign: 'left' }}>
          <tbody>
            <tr>
              <td>Date:</td>
              <td>{event.date}</td>
            </tr>
            <tr>
              <td>Rarity:</td>
              <td>{event.Rarity}</td> {/* Add the corresponding field from your JSON */}
            </tr>
            <tr>
              <td>Augment:</td>
              <td>{event.Augment}</td> {/* Add the corresponding field from your JSON */}
            </tr>
            <tr>
              <td>Classification:</td>
              <td>{event.Classification}</td> {/* Add the corresponding field from your JSON */}
            </tr>
            <tr>
              <td>Faction:</td>
              <td>{event.Faction}</td> {/* Add the corresponding field from your JSON */}
            </tr>
            <tr>
              <td>Illustrator:</td>
              <td>{event.Illustrator}</td> {/* Add the corresponding field from your JSON */}
            </tr>
            <tr>
              <td>Voice Actor:</td>
              <td>{event.Actor}</td> {/* Add the corresponding field from your JSON */}
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

export default EventDetail;
