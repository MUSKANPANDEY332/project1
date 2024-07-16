import React from "react";
import "./DestinationPage.css";
import b1 from '../assests/images/b1.png';
import b2 from '../assests/images/b2.png';
import next from "../assests/images/next.png";

const DestinationPage = () => {
  return (
    <section className="destination-section">
      <header className="header">
        <div className="logo">MONDEE</div>
        <div className="menu">
          <button className="menu-item">Log In</button>
          <button className="menu-item">Sign Up</button>
        </div>
      </header>
      <div className="content">
        <h2>It's time to travel around the World</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Your destination"
          />
          <button className="search-button">
            <img src={next} alt="send" />
          </button>
        </div>
        <div className="decorative-blocks">
          <div className="b1">
            <img src={b1} alt="decorative block 1" />
          </div>
          <div className="b2">
            <img src={b2} alt="decorative block 2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationPage;
