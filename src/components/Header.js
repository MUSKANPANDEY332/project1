// src/Header.js
import React from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>WONDER</h1>
      </div>
      <div className="header-icons">
        <FaUser className="icon" />
      </div>
    </header>
  );
};

export default Header;
