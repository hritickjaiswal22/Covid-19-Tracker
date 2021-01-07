import React from 'react';

import '../styles/Header.css';

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header__Title">COVID-19</h1>
      <h2 className="Header_Description">
        Global and Country Wise Cases of Corona Virus
      </h2>
      <p className="Header_Info">
        (For a Particlar select a Country from below)
      </p>
    </header>
  );
};

export default Header;
