import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMember } from '../../actions/profileActions';

class AddMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      seasons: '',
      playoffs: '',
      championships: '',
      lastplaces: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const memberData = {
      handle: this.state.handle,
      seasons: this.state.seasons,
      playoffs: this.state.playoffs,
      championships: this.state.championships,
      lastplaces: this.state.lastplaces
    };

    this.props.addMember(memberData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="add-member">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add League Member</h1>
              <p className="lead text-center">
                Enter some information about one of your league members
              </p>
              <small className="d-block pb-3">* = required field</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Member Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for this member."
                />
                <TextFieldGroup
                  placeholder="Seasons"
                  name="seasons"
                  value={this.state.seasons}
                  onChange={this.onChange}
                  error={errors.seasons}
                  info="Please use commas to separate if adding multiple years."
                />
                <TextFieldGroup
                  placeholder="Playoff appearances"
                  name="playoffs"
                  value={this.state.playoffs}
                  onChange={this.onChange}
                  error={errors.playoffs}
                  info="Please use commas to separate if adding multiple years."
                />
                <TextFieldGroup
                  placeholder="Championships"
                  name="championships"
                  value={this.state.championships}
                  onChange={this.onChange}
                  error={errors.championships}
                  info="Please use commas to separate if adding multiple years."
                />
                <TextFieldGroup
                  placeholder="Last place finishes"
                  name="lastplaces"
                  value={this.state.lastplaces}
                  onChange={this.onChange}
                  error={errors.lastplaces}
                  info="Please use commas to separate if adding multiple years."
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4 "
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddMember.propTypes = {
  addMember: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addMember }
)(withRouter(AddMember));
