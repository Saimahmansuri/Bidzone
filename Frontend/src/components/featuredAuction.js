import React from 'react';
import './featuredAuction.css';

const FeaturedAuctions = () => {
  return (
    <section className="featured-auctions">
      <div className="container">
        <h2>Featured Auctions</h2>
        <div className="auctions-grid">
          <div className="auction-item">
            <img src="path-to-image.jpg" alt="Auction Item" />
            <h3>Auction Item 1</h3>
            <p>Starting Bid: $100.00</p>
          </div>
          <div className="auction-item">
            <img src="path-to-image.jpg" alt="Auction Item" />
            <h3>Auction Item 2</h3>
            <p>Starting Bid: $200.00</p>
          </div>
          {/* Add more items as needed */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAuctions;
