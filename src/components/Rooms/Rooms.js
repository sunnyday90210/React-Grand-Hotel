import React, { Component } from 'react';
import './Rooms.css';

class Rooms extends Component {
  render() {
    const rooms = [
      {
        id: 1,
        name: 'Single Room',
        desc:
          '350+ sq. ft., USB ports, large laptop safe, refrigerator, WiFi, HDTV, Cuisinart coffeemaker.',
        price: '$99.00',
        img: 'img/single-room.jpeg'
      },
      {
        id: 2,
        name: 'Single Room',
        desc:
          '350+ sq. ft., USB ports, large laptop safe, refrigerator, WiFi, HDTV, Cuisinart coffeemaker.',
        price: '$99.00',
        img: 'img/single-room.jpeg'
      },
      {
        id: 3,
        name: 'Single Room',
        desc:
          '350+ sq. ft., USB ports, large laptop safe, refrigerator, WiFi, HDTV, Cuisinart coffeemaker.',
        price: '$99.00',
        img: 'img/single-room.jpeg'
      },
      {
        id: 4,
        name: 'Single Room',
        desc:
          '350+ sq. ft., USB ports, large laptop safe, refrigerator, WiFi, HDTV, Cuisinart coffeemaker.',
        price: '$99.00',
        img: 'img/single-room.jpeg'
      }
    ];

    return (
      <section className="rooms">
        <div className="common-header">
          <h1 className="common-heading">Rooms In Grand Hotel</h1>
          <div className="underline">
            <div className="small-underline" />
            <div className="big-underline" />
          </div>
        </div>

        {rooms.map(room => {
          return (
            <div className="rooms-cards-wrapper">
              <div className="room-card">
                <img src={room.img} alt="rooms" />
                <div className="room-card-content">
                  <h4 className="room-card-heading">{room.name}</h4>
                  <p className="room-card-paragraph">{room.desc}</p>
                  <p className="room-price">{room.price}</p>
                  <button className="room-card-btn">
                    Book Now
                    <i className="fas fa-angle-double-right btn-arrow" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}

export default Rooms;
