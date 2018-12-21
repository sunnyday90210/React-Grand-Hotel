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
      </header>
    );
  }
}

export default Header;
