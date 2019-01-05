import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';

class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  scrollToAbout = () => {
    scroll.scrollTo(950);
  };

  scrollToRooms = () => {
    scroll.scrollTo(1550);
  };

  render() {
    let navbarClasses = 'navigation';
    if (this.props.show) {
      navbarClasses = 'navigation open';
    }

    return (
      <nav className={navbarClasses}>
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
            <Link
              id="home"
              className="navigation-link"
              to="home"
              onClick={this.scrollToTop}>
              home
            </Link>
          </li>
          <li className="navigation-item">
            <Link
              id="aboutus"
              className="navigation-link"
              to="aboutus"
              onClick={this.scrollToAbout}>
              about us
            </Link>
          </li>
          <li className="navigation-item">
            <Link
              id="rooms"
              className="navigation-link"
              to="rooms"
              onClick={this.scrollToRooms}>
              rooms
            </Link>
          </li>
          <li className="navigation-item">
            <Link
              id="events"
              className="navigation-link"
              to="events"
              onClick={this.scrollToTop}>
              events
            </Link>
          </li>
          <li className="navigation-item">
            <Link
              id="customers"
              className="navigation-link"
              to="customers"
              onClick={this.scrollToBottom}>
              customers
            </Link>
          </li>
          <li className="navigation-item">
            <Link
              id="contact"
              className="navigation-link"
              to="contact"
              onClick={this.scrollToBottom}>
              contact
            </Link>
          </li>
        </ul>
        <div className="copyright">
          <p>&copy; {this.props.date} Grand Hotel. All Rights Reserved</p>
        </div>
      </nav>
    );
  }
}

export default Navbar;
