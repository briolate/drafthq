import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {
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

    const profileData = {
      handle: this.state.handle,
      seasons: this.state.seasons,
      playoffs: this.state.playoffs,
      championships: this.state.championships,
      lastplaces: this.state.lastplaces
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">Enter some league information</p>
              <small className="d-block pb-3">* = required field</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your profile URL."
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

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
