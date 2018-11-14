import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import isEmpty from '../../validation/is-emtpy';

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            {/* <img src="profile.user.avatar" alt="User avatar" className="rounded circle"/> TODO: ADD UPLOADABLE AVATAR */}
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{profile.user.name}</h3>
            {/* <p>{isEmpty(profile.league) (<span>User is not in a league.</span>) : <span>{profile.league}</span><p>
            TODO: ADD JOIN LEAGUE FUNCTIONALITY*/}
            <Link to={`/profile${profile.handle}`} className="btn btn-info">
              View Profile
            </Link>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <ul className="list-group">
              {profile.playoffs.map((playoffs, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-th-large pr-1" />
                  {playoffs}
                </li>
              ))}
            </ul>
            <ul className="list-group">
              {profile.championships.map((championship, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-trophy pr-1" />
                  {championship}
                </li>
              ))}
            </ul>
            <ul className="list-group">
              {profile.lastplace.map((lastplace, index) => (
                <li key={index} className="list-group-item">
                  Last place: {lastplace}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
