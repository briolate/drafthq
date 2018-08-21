import React, { Component } from 'react';

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
          <li>Keeper Calculator</li>
          <li>Draft History</li>
          <li>Pre-draft Rankings</li>
        </ul>
      </nav>
    );
  }
}

export default SideNav;
