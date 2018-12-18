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
    let navbar;
    if (this.state.navbarOpen) {
      navbar = <Navbar />;
    }

    return (
      <div>
        <Sidebar menuClickHandeler={this.drawerToggleClickHandler} />
        {navbar}
      </div>
    );
  }
}

export default App;
