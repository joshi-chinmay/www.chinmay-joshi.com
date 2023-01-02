import React, {Component} from 'react';

export default class PageNotFound extends Component {
  render() {
    return(
      <div className="row mt-5">
        <div className="col-md-12 text-center not-found">
          <h1 className="font-weight-bold text-uppercase">Page not found</h1>
          <a href="/">Go back to home page.</a>
        </div>
      </div>
    );
  }
}
