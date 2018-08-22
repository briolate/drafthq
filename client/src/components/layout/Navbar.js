import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

import SideNav from './SideNav';
import Logo from '../../img/logo.png';

class Navbar extends Component {
  state = {
    sideNavOpen: false,
    backdropOn: false
  };

  sideNavToggleClickHandler = () => {
    this.setState(prevState => {
      return {
        sideNavOpen: !prevState.sideNavOpen,
        backdropOn: !prevState.backdrop
      };
    });
  };

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    let backdrop;

    if (this.state.sideNavOpen) {
      backdrop = (
        <div className="backdrop" onClick={this.sideNavToggleClickHandler} />
      );
    }

    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <div>
        {backdrop}
        <SideNav show={this.state.sideNavOpen} />
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="container">
            <div className="logo-toggle pr-3">
              <img
                src={Logo}
                alt="Logo"
                style={{ height: '40px', width: '40px' }}
                onClick={this.sideNavToggleClickHandler}
              />
            </div>
            <Link className="navbar-brand" to="/">
              Draft HQ
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/members">
                    {' '}
                    Members
                  </Link>
                </li>
              </ul>
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
