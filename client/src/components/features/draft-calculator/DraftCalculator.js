import React, { Component } from 'react';
import TextFieldGroup from '../../common/TextFieldGroup';

import draftValues from './values.js';

import Player from '../../../img/player.png';

class DraftCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adp: '',
      picklost: '',
      tkv: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const calculatorData = {
      adp: this.state.adp,
      picklost: this.state.picklost
    };

    this.props.calculateValue(calculatorData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="calculator">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Keeper Calculator</h1>
              <p className="lead text-center">
                Calculator to determine the value of your keeper with respect to
                the draft pick lost for keeping said player.
              </p>
              <small className="d-block pb-3">
                <p>
                  <b>ADP (Average Draft Position):</b> The player's preseason
                  consensus draft position (or use your own rankings).
                </p>
                <p>
                  <b>Pick Lost</b>: The pick you are losing for keeping this
                  player.
                </p>
                <p>
                  <b>TKV (Total Keeper Value):</b> The total value of your
                  keeper considering the pick that is lost with keeping him.
                </p>
              </small>
              <img
                src={Player}
                alt="Player icon"
                style={{ height: '200px', width: '200px' }}
                className="pb-3"
              />
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="ADP"
                  name="adp"
                  value={this.state.adp}
                  onChange={this.onChange}
                  info="Average draft position"
                />
                <TextFieldGroup
                  placeholder="Pick Lost"
                  name="picklost"
                  value={this.state.picklost}
                  onChange={this.onChange}
                  info="Pick lost for keeping player"
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

export default DraftCalculator;
