import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav id="navbar">
        <div className="n__left">
          <img src="https://www.smithweb.com.cn/wp-content/uploads/smith-logo-1c.svg" />
        </div>
        <div className="n__right">
          <NavLink to="/">Homepage</NavLink>
          <NavLink to="/">Sales</NavLink>
          <NavLink to="/">About Us</NavLink>
        </div>
      </nav>
    );
  }
}

export default Navbar;
