import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
      </Link>
      <Link to="/add-draft" className="btn btn-light">
        <i className="fas fa-calendar text-info mr-2" />
        Add Draft
      </Link>
      <Link to="/add-member" className="btn btn-light">
        <i className="fas fa-plus text-info mr-2" />
        Add Member
      </Link>
    </div>
  );
};

export default ProfileActions;
