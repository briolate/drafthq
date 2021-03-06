import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';

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

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // Bring arrays back to CSV (comma separated value)
      const seasonsCSV = profile.seasons.join(',');
      const playoffsCSV = profile.playoffs.join(',');
      const championshipsCSV = profile.championships.join(',');
      const lastplacesCSV = profile.lastplaces.join(',');

      // If profile field doesn't exist, make empty string
      profile.seasons = !isEmpty(profile.seasons) ? profile.seasons : '';
      profile.playoffs = !isEmpty(profile.playoffs) ? profile.playoffs : '';
      profile.championships = !isEmpty(profile.championships)
        ? profile.championships
        : '';
      profile.lastplaces = !isEmpty(profile.lastplaces)
        ? profile.lastplaces
        : '';

      // Set component fields state
      this.setState({
        handle: profile.handle,
        seasons: seasonsCSV,
        playoffs: playoffsCSV,
        championships: championshipsCSV,
        lastplaces: lastplacesCSV
      });
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
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Edit Profile</h1>
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
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(CreateProfile));
