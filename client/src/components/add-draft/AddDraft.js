import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDraft } from '../../actions/profileActions';

class AddDraft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '',
      qb: '',
      rb1: '',
      rb2: '',
      rb3: '',
      wr1: '',
      wr2: '',
      wr3: '',
      te: '',
      dst: '',
      k: '',
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

    const draftData = {
      year: this.state.year,
      qb: this.state.qb,
      rb1: this.state.rb1,
      rb2: this.state.rb2,
      rb3: this.state.rb3,
      wr1: this.state.wr1,
      wr2: this.state.wr2,
      wr3: this.state.wr3,
      te: this.state.te,
      dst: this.state.dst,
      k: this.state.k
    };

    this.props.addDraft(draftData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="add-season">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-5 text-center">Add Draft</h1>
              <p className="lead text-center">
                Add year of season and the round in which you picked each
                position
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Year"
                  name="year"
                  value={this.state.year}
                  onChange={this.onChange}
                  error={errors.year}
                />
                <TextFieldGroup
                  placeholder="* QB"
                  name="qb"
                  value={this.state.qb}
                  onChange={this.onChange}
                  error={errors.qb}
                />
                <TextFieldGroup
                  placeholder="* RB1"
                  name="rb1"
                  value={this.state.rb1}
                  onChange={this.onChange}
                  error={errors.rb1}
                />
                <TextFieldGroup
                  placeholder="* RB2"
                  name="rb2"
                  value={this.state.rb2}
                  onChange={this.onChange}
                  error={errors.rb2}
                />
                <TextFieldGroup
                  placeholder="RB3"
                  name="rb3"
                  value={this.state.rb3}
                  onChange={this.onChange}
                  error={errors.rb3}
                />
                <TextFieldGroup
                  placeholder="* WR1"
                  name="wr1"
                  value={this.state.wr1}
                  onChange={this.onChange}
                  error={errors.wr1}
                />
                <TextFieldGroup
                  placeholder="* WR2"
                  name="wr2"
                  value={this.state.wr2}
                  onChange={this.onChange}
                  error={errors.wr2}
                />
                <TextFieldGroup
                  placeholder="WR3"
                  name="wr3"
                  value={this.state.wr3}
                  onChange={this.onChange}
                  error={errors.wr3}
                />
                <TextFieldGroup
                  placeholder="* TE"
                  name="te"
                  value={this.state.te}
                  onChange={this.onChange}
                  error={errors.te}
                />
                <TextFieldGroup
                  placeholder="* D/ST"
                  name="dst"
                  value={this.state.dst}
                  onChange={this.onChange}
                  error={errors.dst}
                />
                <TextFieldGroup
                  placeholder="* K"
                  name="k"
                  value={this.state.k}
                  onChange={this.onChange}
                  error={errors.k}
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

AddDraft.propTypes = {
  addDraft: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addDraft }
)(withRouter(AddDraft));
