import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Rooms from './components/Rooms/Rooms';
import Customers from './components/Customers/Customers';
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {
    navbarOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { navbarOpen: !prevState.navbarOpen };
    });
  };

  render() {
    return (
      <div>
        <Sidebar
          menuClickHandeler={this.drawerToggleClickHandler}
          show={this.state.navbarOpen}
        />
        <Navbar show={this.state.navbarOpen} />
        <Header />
        <AboutUs />
        <Rooms />
        <Customers />
        <Footer />
      </div>
    );
  }
}

export default App;
