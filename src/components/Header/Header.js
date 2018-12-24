import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="brand">
          <div>
            <img src="img/crown.png" alt="Logo" width="80" />
          </div>
          <h3 className="hotel-heading">Grand Hotel</h3>
        </div>
        <div className="banner">
          <h1 className="banner-heading">Welcome to Grand Hotel</h1>
          <p className="banner-paragraph">Make your life luxurious</p>
          <button className="banner-button">Check Out</button>
        </div>
      </header>
    );
  }
}

export default Header;
