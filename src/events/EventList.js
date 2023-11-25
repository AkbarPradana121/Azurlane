import React from 'react';
import { Link } from 'react-router-dom';
import eventData from '../data/eventData.json';
import './EventList.css'; // Import the CSS file for styling

const EventList = () => {
  return (
    <div className="sea-theme">
      <h1 className="title">META_SHOWDOWN_SEASON</h1>
      <div className="details">
        <hr className="line" />
        <p className="info">
          Details about the META_SHOWDOWN_SEASON. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <table className="event-table">
        <thead>
          <tr>
            <th>NO</th>
            <th>Event Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {eventData.map((event, index) => (
            <tr key={event.id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/event/${event.id}`}>{event.name}</Link>
              </td>
              <td>{event.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;

