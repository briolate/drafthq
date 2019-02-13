// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { getCurrentProfile, deleteMember } from '../../actions/profileActions';

// class MemberItems extends Component {
//   componentDidMount() {
//     this.props.getCurrentProfile();
//   }

//   onDeleteClick(id) {
//     this.props.deleteMember(id);
//   }

//   render() {
//     const members = this.props.members.map(member => (
//       <tr key={draft._id}>
//         <td>{draft.year}</td>
//         <td>{draft.qb}</td>
//         <td>{draft.rb1}</td>
//         <td>{draft.rb2}</td>
//         <td>{draft.rb3}</td>
//         <td>{draft.wr1}</td>
//         <td>{draft.wr2}</td>
//         <td>{draft.wr3}</td>
//         <td>{draft.te}</td>
//         <td>{draft.dst}</td>
//         <td>{draft.k}</td>
//         <td>
//           <button
//             onClick={this.onDeleteClick.bind(this, member._id)}
//             className="btn btn-danger"
//           >
//             Delete
//           </button>
//         </td>
//       </tr>
//     ));

//     return (
//       <div>
//         <h4 className="mb-4">Members</h4>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Year</th>
//               <th>QB</th>
//               <th>RB1</th>
//               <th>RB2</th>
//               <th>RB3</th>
//               <th>WR1</th>
//               <th>WR2</th>
//               <th>WR3</th>
//               <th>TE</th>
//               <th>DS/T</th>
//               <th>K</th>
//             </tr>
//             {members}
//           </thead>
//         </table>
//       </div>
//     );
//   }
// }

// Members.propTypes = {
//   deleteMember: PropTypes.func.isRequired,
//   getCurrentProfile: PropTypes.func.isRequired
// };

// export default connect(
//   null,
//   { getCurrentProfile, deleteMember }
// )(MemberItems);
