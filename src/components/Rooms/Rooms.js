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
        name: 'Double Room',
        desc:
          '350+ sq. ft., USB ports, large laptop safe, refrigerator, WiFi, HDTV, Cuisinart coffeemaker.',
        price: '$199.00',
        img: 'img/double-room.jpeg'
      },
      {
        id: 3,
        name: 'Lux',
        desc:
          '350+ sq. ft., USB ports, large laptop safe, refrigerator, WiFi, HDTV, Cuisinart coffeemaker.',
        price: '$299.00',
        img: 'img/lux.jpeg'
      },
      {
        id: 4,
        name: 'VIP',
        desc:
          '350+ sq. ft., USB ports, large laptop safe, refrigerator, WiFi, HDTV, Cuisinart coffeemaker.',
        price: '$399.00',
        img: 'img/vip.jpeg'
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

        <div className="rooms-cards-wrapper">
          {rooms.map(room => {
            return (
              <div className="room-card">
                <img src={room.img} alt="rooms" className="room-img" />
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
            );
          })}
        </div>
        <div className="rooms-btn-wrapper">
          <button className="rooms-btn">Check All Rooms</button>
        </div>
      </section>
    );
  }
}

export default Rooms;
