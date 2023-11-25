import React from 'react';
import './akbar.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="essay">
      <p>
         Perkenalkan Nama Saya Akbar Wahyu Pradana,semester 5 di Teknik Komputer Universitas Diponegoro
        Disini Saya Telah membuat web Azur Lane Database menggubakan PWA dan file json 
        </p>
        <p>
          Terdapat 6 halaman ( SplashScreen, About, Event, EventDetail, ShipList dan Ship Detail.)
          Terdapat 4 tolbar Home About Ship dan Event
          Dalam SplashScreen terdapat 3tombole utama untuk menuju ABout, Ship atau Event
        </p>
      </div>
      <div className="photo">
        <img src="https://i.postimg.cc/25Ycr88x/Whats-App-Image-2023-11-25-at-15-49-38.jpg" alt="error" /> 
      </div>
      <div className="biodata">
        <h2>Biodata</h2>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>Akbar Wahyu Pradana</td>
            </tr>
            <tr>
              <td>Date of Birth:</td>
              <td>4 Mei 2002</td>
            </tr>
            <tr>
              <td>NIM :</td>
              <td>21120121130067</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
