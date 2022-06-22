import React, {Component} from 'react';

export default class PageNotFound extends Component {
  render() {
    return(
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <p className="clip-image-to-text font-weight-bold text-uppercase">Page not found</p>
          <a href="/">Go back to home page.</a>
        </div>
      </div>
    );
  }
}
