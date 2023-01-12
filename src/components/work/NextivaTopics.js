import React, { Component } from 'react';

import Password from '../util/Password';

import NextLink from '../util/NextLink';
import WorkTabLandingInfo from '../util/WorkTabLandingInfo';
import NextivaTopicsImg from '../../images/work/nextiva-smart-topics/topics.png';

export default class NextivaTopics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    }

    this.authenticate = this.authenticate.bind(this);
  }

  componentDidMount() {
    document.title = "Nextiva SmartTopics | Chinmay Joshi";
  }

  authenticate() {
    this.setState({ isAuthenticated: true });
  }

  render() {
    if (!this.state.isAuthenticated) {
      return (<Password authenticate={this.authenticate} />);
    } else {
      return (
        <div className="work-page-container">
          <WorkTabLandingInfo
            pageHeading="Nextiva SmartTopics"
            classList={"bg-pastel-baby-pink full-bleed"}
            pageDescription="Better understand customers by assigning topics on conversations. Sentiment analysis is combined with topic-level experience rating to predict next actions to ensure customer satisfaction."
            tags={["Product Design", "Usability Study", "Visual Design"]}
            landingPageImage={NextivaTopicsImg}
            jumpToProto="#design"
          />

          <div className="work-page-presnetation">
            <div id="initial" className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5>My role</h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <p>
                  I was a lead designer responsible for the re-design efforts for the SmartTopics experience.
                  I worked with Contact Panel team to integrate topics UI in the designs.
                </p>
              </div>
            </div>

            <div id="duration" className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5>Duration</h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <p>
                  This project was designed and developed in <b>six months</b>. The research & design phase took three months, and partial development began once I finalized user flows.
                </p>
              </div>
            </div>

            <hr />

            <div id="duration" className="row work-tab">
              <div className="col-sm-12 col-md-12 text-center">
                <p>
                  More updates to follow.
                  Check <a href="/work/nextiva-automation">Automations Project</a> & <a href="/work/nextiva-design-system">Nextiva's Design system</a> in the meantime to understand my design process.
                </p>
              </div>
            </div>

          </div>

          <NextLink nextLink={{ name: "Nextiva - Design system", slug: "/nextiva-design-system" }} />

        </div>
      );
    }
  }
}
