import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  

  render() {
    return (
      <nav className="navigation">
        <div className="navigation-header">
          <h1 className="navigation-heading">Grand Hotel</h1>

          <form className="navigation-search">
            <input
              type="text"
              className="navigation-search-input"
              placeholder="Search..."
            />
            <button className="navigation-search-btn">
              <i className="fas fa-search" />
            </button>
          </form>
        </div>
        <ul className="navigation-list">
          <li className="navigation-item">
            <a href="/" className="navigation-link">
              Home
            </a>
          </li>
          <li className="navigation-item">
            <a href="/" className="navigation-link">
              about us
            </a>
          </li>
          <li className="navigation-item">
            <a href="/" className="navigation-link">
              rooms
            </a>
          </li>
          <li className="navigation-item">
            <a href="/" className="navigation-link">
              events
            </a>
          </li>
          <li className="navigation-item">
            <a href="/" className="navigation-link">
              customers
            </a>
          </li>
          <li className="navigation-item">
            <a href="/" className="navigation-link">
              contact
            </a>
          </li>
        </ul>
        <div className="copyright">
          <p>&copy; 2019 Grand Hotel. All Rights Reserved</p>
        </div>
      </nav>
    );
  }
}

export default Navbar;
