import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/intro';
import Auction from './components/Auction';
import About from './components/About';
import Contact from './components/contact';
import FeaturedAuctions from './components/featuredAuction';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div>
      <FeaturedAuctions />
      </div>
    </Router>
  );
};

export default App;
