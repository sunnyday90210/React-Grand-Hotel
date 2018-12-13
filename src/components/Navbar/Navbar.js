import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="sidebar">
          <div className="menu-icon">
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line line-3" />
          </div>
          <ul className="social-icons-list">
            <li>
              <button style={socialBtn} className="social-link">
                <i className="fab fa-facebook-f" />
              </button>
            </li>
            <li>
              <button style={socialBtn} className="social-link">
                <i className="fab fa-twitter" />
              </button>
            </li>
            <li>
              <button style={socialBtn} className="social-link">
                <i className="fab fa-pinterest" />
              </button>
            </li>
            <li>
              <button style={socialBtn} className="social-link">
                <i className="fab fa-instagram" />
              </button>
            </li>
          </ul>
          <div className="year">
            <p>2019</p>
          </div>
        </div>
      </div>
    );
  }
}

const socialBtn = {
  background: 'none',
  border: 'none',
  padding: '0',
  margin: '0'
};

export default Navbar;
