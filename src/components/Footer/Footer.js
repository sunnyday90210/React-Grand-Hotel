import React from 'react';
import './Footer.css';

const footer = props => {
  const image = [
    {
      img: 'img/gallery-img-1.jpeg'
    },
    {
      img: 'img/gallery-img-2.jpeg'
    },
    {
      img: 'img/gallery-img-3.jpeg'
    },
    {
      img: 'img/gallery-img-4.jpeg'
    },
    {
      img: 'img/gallery-img-5.jpeg'
    },
    {
      img: 'img/gallery-img-6.jpeg'
    }
  ];

  return (
    <footer className="footer">
      <div className="main-part">
        <div className="footer-list-wrapper">
          <h3 className="footer-heading">Grand Hotel</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="/" className="footer-list-link">
                support@grandhotel.com
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/" className="footer-list-link">
                Los Angeles, Grand Street 123
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/" className="footer-list-link">
                Tel: 800-977-7777
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-list-wrapper">
          <h3 className="footer-heading">Explore</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="/" className="footer-list-link">
                Home
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/" className="footer-list-link">
                About Us
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/" className="footer-list-link">
                Rooms
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/" className="footer-list-link">
                Events
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/" className="footer-list-link">
                Customers
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/" className="footer-list-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3 className="footer-heading">Contact</h3>
          <p>Sign Up for News</p>
          <form className="footer-form">
            <input
              type="text"
              className="footer-input"
              placeholder="Your Email..."
            />
            <button className="footer-btn">Sign Up</button>
          </form>
        </div>
        <div className="gallery">
          <h3 className="footer-heading">Gallery</h3>
          <div className="gallery-images">
            {image.map(images => {
              return (
                <div key={images.img} className="image-wrapper">
                  <img
                    src={images.img}
                    alt="Gallery Images"
                    className="footer-image"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="creator-part">
        <div className="copyright-text">
          <p>Copyright &copy; {props.date}. Grand Hotel. All Rights Reserved</p>
        </div>
        <div className="text-right">
          <p>
            Made With <i className="fas fa-heart" /> By <span>Robert</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
