import React from 'react';
import './intro.css';
import auctionImage from './Images/auction-product-13.png'; // Update the path to your image

const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro-text">
          <h1>Join Exclusive Auction & Get The Finest.</h1>
          <form className="search-form">
            <select className="category-select">
              <option>Category</option>
              <option>Motors & Vehicles</option>
              <option>Fashion</option>
              <option>Sports & Outdoors</option>
              <option>Home & Garden</option>
              <option>Electronics & Appliances</option>
              <option>Collectibles & Antiques</option>
            </select>
            <input type="text" placeholder="I'm Looking for..." />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="featured-item">
          <img src={auctionImage} alt="Auction Item" />
          <div className="item-details">
            <h2>Most Famous Skirt Piece Of Celebrities</h2>
            <p>$350.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
