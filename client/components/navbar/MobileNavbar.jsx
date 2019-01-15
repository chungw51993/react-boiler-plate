import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MobileNavbar extends Component {
  constructor(props) {
    super(props);

    this.showMenu = this.showMenu.bind(this);

    this.state = {
      showMenu: false,
    };
  }

  componentDidMount() {
    document.querySelector(':not(.mn__list)').addEventListener('click', (e) => {
      if (e.target.className !== 'mn__list isOpen'&& this.state.showMenu) {
        this.setState({
          showMenu: false,
        });
      }
    });
  }

  showMenu() {
    const { showMenu } = this.state;
    this.setState({
      showMenu: !showMenu,
    });
  }

  render() {
    const { showMenu } = this.state;
    return (
      <nav id="mobile-navbar">
        <div className="mn__menu">
          <button onClick={this.showMenu}>
            <i className="fa fa-bars"></i>
          </button>
        </div>
        <div className={showMenu ? "mn__list isOpen" : "mn__list"}>
          <img src="https://www.smithweb.com.cn/wp-content/uploads/smith-logo-1c.svg" />
          <NavLink to="/">Homepage</NavLink>
          <NavLink to="/">Sales</NavLink>
          <NavLink to="/">About Us</NavLink>
        </div>
      </nav>
    );
  }
}

export default MobileNavbar;
