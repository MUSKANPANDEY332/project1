import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";
import next from "../assests/images/next.png";
import cycle from "../assests/images/cycle.png";
import b1 from '../assests/images/b1.png';
import b2 from '../assests/images/b2.png';
import d1Image from '../assests/images/d1.png';
import d2 from '../assests/images/d2.png';

const Main = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query) {
      const encodedDestination = encodeURIComponent(query);
      navigate(`/destination?name=${encodedDestination}`);
    }
  };

  return (
    <section className="search-section">
      <div className="search-container1">
        <h4>Explore the World</h4>
        <h2>It's time to travel around the World</h2>

        <div className="search-container">
          <input
            type="text"
            placeholder="Your destination"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            <img src={next} alt="send" />
          </button>
        </div>
      </div>
      <div className="d1">
        <img src={d1Image} alt="decorative blockbox 1" />
      </div>
      <div className="b1">
        <img src={b1} alt="decorative block 1" />
      </div>
      <div className="b2">
        <img src={b2} alt="decorative block 2" />
      </div>
      <div className="cycle-image">
        <img src={cycle} alt="animation" />
      </div>
      <div className="d2">
        <img src={d2} alt="destination yellowbox" />
      </div>
    </section>
  );
};

export default Main;
