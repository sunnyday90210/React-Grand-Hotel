import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
  

  render() {
    return (
      <div className="navbar">
        <div className="sidebar">
          <div className="menu-icon" onClick={this.toggleMenu}>
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
          <div style={year} className="year">
            <p>2019</p>
          </div>
        </div>
      </div>
    );
  }
}

const year = {
  marginBottom: '1rem',
  fontSize: '1.5rem',
  color: '#555'
};

const socialBtn = {
  background: 'none',
  border: 'none',
  padding: '0',
  margin: '0',
  fontSize: '2rem',
  color: '#777',
  outline: 'none'
};

export default Sidebar;
