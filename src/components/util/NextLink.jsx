import React, {Component} from 'react';

export default class NextLink extends Component {
  render() {
    const nextLink = this.props.nextLink;

    return(
      <div className="row">
        <div className="col-sm-12 offset-md-2 col-md-7 text-right">
          <a href={"/work" + nextLink.slug } className="text-capitalize d-inline text-decoration-underline font-weight-bolder lead">
            Next: {nextLink.name} →
          </a>
        </div>
      </div>
    );
  }
}
