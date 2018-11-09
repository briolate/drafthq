import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideNav extends Component {
  render() {
    let sideNavClasses = ['side-nav'];
    if (this.props.show) {
      sideNavClasses = ['side-nav open'];
    }

    return (
      <nav className={sideNavClasses}>
        <ul className="side-nav-links">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/calculator"
              onClick={this.props.toggleSidenav}
            >
              Keeper Calculator
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/drafthistory"
              onClick={this.props.toggleSidenav}
            >
              Draft History
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/rankings"
              onClick={this.props.toggleSidenav}
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
