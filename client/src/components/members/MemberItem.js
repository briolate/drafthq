import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteMember } from '../../actions/profileActions';

class MemberItem extends Component {
  onDeleteClick(e) {
    this.props.deleteMember();
  }

  render() {
    const { members } = this.props;

    const memberItems = members.map(member => (
      <li key={member._id} className="list-group-item">
        <h4>{member.handle}</h4>
        <p>
          {member.seasons === '' ? null : (
            <span>
              <strong>Seasons:</strong> {member.seasons}
            </span>
          )}
        </p>
        <p>
          {member.playoffs === '' ? null : (
            <span>
              <strong>Playoffs:</strong> {member.playoffs}
            </span>
          )}
        </p>
        <p>
          {member.playoffs === '' ? null : (
            <span>
              <strong>Championships:</strong> {member.championships}
            </span>
          )}
        </p>
        <p>
          {member.playoffs === '' ? null : (
            <span>
              <strong>Last Places:</strong> {member.lastplaces}
            </span>
          )}
        </p>
        <button
          onClick={this.onDeleteClick.bind(this)}
          className="btn btn-danger"
        >
          Delete Member
        </button>
      </li>
    ));

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-md-6 mt-2">
            {memberItems.length > 0 ? (
              <ul className="list-group">{memberItems}</ul>
            ) : (
              <p className="text-center">
                You haven't added any league members
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

MemberItem.propTypes = {
  deleteMember: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteMember }
)(MemberItem);
