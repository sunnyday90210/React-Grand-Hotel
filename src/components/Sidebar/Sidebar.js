import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    let rotateClassTop = 'line line-1';
    if (this.props.show) {
      rotateClassTop = 'line line-1 rotatetop';
    }
    let hideClass = 'line line-2';
    if (this.props.show) {
      hideClass = 'line line-2 hide';
    }

    let rotateClassBottom = 'line line-3';
    if (this.props.show) {
      rotateClassBottom = 'line line-3 rotatebottom';
    }

    return (
      <div className="navbar">
        <div className="sidebar">
          <div className="menu-icon" onClick={this.props.menuClickHandeler}>
            <div className={rotateClassTop} />
            <div className={hideClass} />
            <div className={rotateClassBottom} />
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
            <p>{this.props.date}</p>
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
