import React from 'react';
import './AboutUs.css';

const aboutUs = props => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <h1 className="about-us-heading">About Us</h1>
        <div className="underline">
          <div className="small-underline" />
          <div className="big-underline" />
        </div>
        <h3 className="sub-heading">Grand Hotel</h3>
        <p className="about-us-paragraph">
          Travelers all over the world have been saying “Take me to the Grand
          Hotel” for almost two decades. And because of our innovative approach
          to guests, amenities and service, Grand continues to be synonymous
          with luxury hotel across the globe.
        </p>
        <button className="about-us-btn">
          Read More
          <i className="fas fa-angle-double-right btn-arrow" />
        </button>
      </div>
      <div className="about-us-images">
        <img src="img/about-us-img-1.jpeg" alt="" className="image image-1" />
        <img src="img/about-us-img-2.jpeg" alt="" className="image image-2" />
        <img src="img/about-us-img-3.jpeg" alt="" className="image image-3" />
        <img src="img/about-us-img-4.jpeg" alt="" className="image image-4" />
      </div>
    </section>
  );
};

export default aboutUs;
