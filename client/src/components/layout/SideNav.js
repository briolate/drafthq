import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../style/SideNav.css';

class SideNav extends Component {
  render() {
    let sideNavClasses = ['side-nav'];
    if (this.props.show) {
      sideNavClasses = ['side-nav open'];
    }

    return (
      <nav className={sideNavClasses}>
        <ul>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/calculator"
              onClick={this.sideNavToggleClickHandler}
            >
              Keeper Calculator
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/dashboard"
              onClick={this.sideNavToggleClickHandler}
            >
              Draft History
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/dashboard"
              onClick={this.sideNavToggleClickHandler}
            >
              Pre-draft Rankings
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideNav;
