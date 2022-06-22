import React, {Component} from 'react';

import Tags from './Tags';

export default class WorkTabLandingInfo extends Component {
  render() {
    return(
      <div className="mb-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center mb-5">
            <h1 className="mb-2">
              {this.props.pageHeading}
            </h1>

            <p className="mt-5">
              {this.props.pageDescription}
            </p>

            <div className="mt-5">
              <Tags tags={this.props.tags} />
            </div>

            <div className="mt-5">
              <img src={this.props.landingPageImage} className={"img-fluid " + this.props.landingPageImageWidth} alt="Landing Page Mock Up" />
            </div>
          </div>
        </div>        
        
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center mb-5">
            <a className="btn text-center" href={this.props.jumpToProto}>Jump to prototype</a>
          </div>
        </div>

        <hr />

        {/* <div className="row mt-5 mb-5">
          <div className="col-md-6">
            <h4 className="px-5">Overview</h4>
            <p className="px-5">{this.props.overview}</p>
          </div>
          <div className="col-md-6">
            <h4 className="px-5">Role</h4>
            <p className="px-5">{this.props.role}</p>
          </div>
        </div>
        <hr /> */}
        
      </div>
    )
  }
}
