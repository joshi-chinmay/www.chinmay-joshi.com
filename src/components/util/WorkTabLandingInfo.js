import React, {Component} from 'react';

import Tags from './Tags.js';

export default class WorkTabLandingInfo extends Component {
  render() {
    return(
      <div className={"row work-landing-page " + (this.props.classList || "bg-pastel-off-white" ) }>
        <div className="col-xs-12 col-sm-12 col-md-5">
          <div className="work-tab-landing-page-title">
            <h1 className="mb-2">
              {this.props.pageHeading}
            </h1>
            <p className="mt-5 w-75">
              {this.props.pageDescription}
            </p>

            <div className="mt-5">
              <Tags tags={this.props.tags} />
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-7 text-center">
          <img src={this.props.landingPageImage} className={"img-fluid " + this.props.landingPageImageWidth } alt="Landing Page Mock Up" />
        </div>
      </div>
    )
  }
}
