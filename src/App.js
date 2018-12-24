import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';

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
      </div>
    );
  }
}

export default App;
