import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#treatments">TREATMENTS</a></li>
          <li><a href="#hospitals">HOSPITALS</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#about">ABOUT US</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
