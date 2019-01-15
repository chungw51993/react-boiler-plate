import React, { Component } from 'react';

import Navbar from './navbar/Navbar.jsx';
import MobileNavbar from './navbar/MobileNavbar.jsx';
import Homepage from './homepage/Homepage.jsx';

class Layout extends Component {
  render() {
    return (
      <section id="layout">
        <Navbar />
        <MobileNavbar />
        <Homepage />
      </section>
    );
  }
}

export default Layout;
