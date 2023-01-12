import React, { Component } from 'react';

export default class Password extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      isValid: true
    };
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      isValid: true
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    (this.state.value === process.env.REACT_APP_ROUTE_KEY) ? this.props.authenticate() : this.setState({ isValid: false });
  }

  render() {
    return (
      <div className="password-container row">
        <div className="col-md-12">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group text-center">
              <h4>Guest area</h4>
              <label className="lead" htmlFor="route-password">Enter password to get through</label>
              <input
                type="password"
                value={this.state.value}
                onChange={this.handleChange}
                className={ "mt-2 form-control " + (this.state.isValid ? "" : "input-error") }
                id="route-password"
                placeholder="**********"
                autoComplete="off"
                required
              />

              <div className={"invalid-feedback " + (this.state.isValid ? "d-none" : "d-block") }>
                Please enter a valid password
              </div>

              <button type="submit" className="mt-5 w-100 btn btn-primary">Unlock</button>
              <a className="d-block lead text-underline mt-3" href="/">Got here by mistake? Click here to go back.</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}