import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

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
        <Sidebar menuClickHandeler={this.drawerToggleClickHandler} />
        <Navbar show={this.state.navbarOpen} />
      </div>
    );
  }
}

export default App;
