import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import MemberItem from './MemberItem';
import { getCurrentProfile } from '../../actions/profileActions';

class Members extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { profile, loading } = this.props.profile;
    let memberItems;

    if (profile === null || loading) {
      memberItems = <Spinner />;
    } else {
      memberItems = <MemberItem members={profile.members} />;
    }

    return (
      <div className="members">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Members</h1>
              {memberItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Members.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Members);
