import React from 'react';
import './HomePage.css'; // Import the CSS file for styling
import logoImage from './LOGO.jpg';

const HomePage = () => {
  return (
    <div className="container">
      <img src={logoImage} className="logo" alt="Logo" width="auto"/>
      <div className="content">
        <button className="button">Sign In</button>
        <button className="button">Sign Up</button>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default HomePage;
