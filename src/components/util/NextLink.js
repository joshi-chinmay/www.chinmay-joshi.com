import React, {Component} from 'react';

export default class NextLink extends Component {
  render() {
    const nextLink = this.props.nextLink;

    return(
      <div className="row">
        <div className="col-sm-12 col-md-12 text-right">
          <hr />
          <div className="next-link">
            <a href={"/work" + nextLink.slug} className="text-capitalize d-inline font-weight-bold h5">
              Next: {nextLink.name} →
            </a>
          </div>
        </div>
      </div>
    );
  }
}
