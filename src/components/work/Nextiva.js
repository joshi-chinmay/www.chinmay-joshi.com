import React, { Component } from 'react';

import Password from '../util/Password';

import NextLink from '../util/NextLink';
import WorkTabLandingInfo from '../util/WorkTabLandingInfo';
import NextivaImg from '../../images/work/nextiva/nextiva.png';

export default class StepUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    }

    this.authenticate = this.authenticate.bind(this);
  }

  componentDidMount() {
    document.title = "Step Up - A Fitness App | Chinmay Joshi";
  }

  authenticate() {
    this.setState({ isAuthenticated: true });
  }

  render() {
    if(!this.state.isAuthenticated) {
      return (<Password authenticate={this.authenticate} /> );
    } else {
      return (
        <div className="work-page-container">
          <WorkTabLandingInfo
            pageHeading="Nextiva"
            classList={"bg-pastel-baby-pink full-bleed"}
            pageDescription="Future of connected communications."
            tags={["Product Design", "Usability Study", "Visual Design", "Design Systems"]}
            landingPageImage={NextivaImg}
          />

          <div className="work-page-presnetation">
            <div className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5>
                  Request case studies
              </h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <p>
                  Nextiva empowers businesses to manage their communications, productivity, and customer relationships on a truly unified platform.
              </p>
                <p>
                  Professional case studies are available to view&nbsp;
                <a href="mailto:chinmayj93@gmail.com" target="_blank" rel="noopener noreferrer">upon request.</a>
                </p>
              </div>
            </div>

            <NextLink nextLink={{ name: "Transity", slug: "/public-transit-safety" }} />
          </div>
        </div>
      );
    }
  }
}
