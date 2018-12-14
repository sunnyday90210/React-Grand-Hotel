import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Navbar />
      </div>
    );
  }
}

export default App;
