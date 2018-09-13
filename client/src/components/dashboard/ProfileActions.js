import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
      </Link>
      <Link to="/add-season" className="btn btn-light">
        <i className="fas fa-calendar text-info mr-2" />
        Add Season
      </Link>
    </div>
  );
};

export default ProfileActions;