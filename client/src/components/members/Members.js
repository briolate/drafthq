import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteMember } from '../../actions/profileActions';

class Members extends Component {
  onDeleteClick(id) {
    this.props.deleteMember(id);
  }

  render() {
    const members = this.props.members.map(member => (
      <tr key={member._id}>
        <td>{member.handle}</td>
        <td>{member.seasons}</td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, member._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));

    return (
      <div>
        <h4 className="mb-4">Members</h4>
        <table className="table">
          <tbody>{members}</tbody>
        </table>
      </div>
    );
  }
}

Members.propTypes = {
  deleteMember: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteMember }
)(Members);
