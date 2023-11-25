import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SplashScreen from './splash/SplashScreen'; // Import SplashScreen from the new directory
import EventList from './events/EventList';
import EventDetail from './events/EventDetail';
import Header from './Header';
import Footer from './Footer';
import Toolbar from './Toolbar/Toolbar';
import List from './ship/List';
import Detail from './ship/Detail';
import About from './About/akbar'; // Correct import path for the About component

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/ship" element={<List />} />
        <Route path="/ship/:id" element={<Detail />} />
        <Route path="/about" element={<About />} /> {/* Use capital 'About' */}
      </Routes>
      <Toolbar />
      <Footer />
    </div>
  );
};

export default App;
