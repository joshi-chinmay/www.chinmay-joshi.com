import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HookedMBL from '../../images/work/StepUp/Hooked-BML.png';
import pitchPoster from '../../images/work/StepUp/Pitch Poster - Storyboarding.jpg';
import MoScoW from '../../images/work/StepUp/MoSCoW.jpg';
import siteflow from '../../images/work/StepUp/Sitefllow.png';
import RiskAnalysis from '../../images/work/StepUp/Risky Assumptions Metrics.jpg';
import wireframes from '../../images/work/StepUp/wireframes.png';
import DesignLoginPage from '../../images/work/StepUp/DesignLoginPage.png';

export default class StepUp extends Component {
  render() {
    return(
      <div className="row">
        <div className="col-md-12">

          <div className="row mt-5">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <h1 className="lead-lg">
                StepUp
              </h1>
            </div>
          </div>

          <div className="work-page-container">
            <div className="row">
              <div className="col-sm-12 offset-md-2 offset-lg-2 col-md-8 col-lg-8">
                <div id="vision" className="card">
                  <div className="card-header">
                    Vision
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <p>
                          StepUp is a mobile application, focused on Jefferson University students and staff to help them maintain a healthy lifestyle by taking extra steps in a day.
                        </p>
                        <p>
                          While designing this product, build - measure - learn cycle as a development.
                          The application follows HOOKED framework, widely known for designing habit-forming products.
                          Hooked Framework consist of four phases: Trigger -> Action -> Reward -> Investment.
                        </p>
                      </div>
                    </div>
                    <div className="row text-center">
                      <div className="col-md-12">
                        <img src={HookedMBL} className="img-fluid w-50" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div id="storyboarding" className="card mt-5">
                  <div className="card-header">
                    Storyboarding
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <p>
                          As I followed HOOKED Framework - the first step is to identify a trigger. So for that, I created a story about how users would get to know about this app.
                        </p>
                      </div>
                    </div>
                    <div className="row text-center">
                      <div className="col-md-12">
                        <img src={pitchPoster} className="img-fluid w-50" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div id="MoScoW" className="card mt-5">
                  <div className="card-header">
                    MoSCoW Analysis
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <p>
                          The MoSCoW method is a prioritization technique used in management, business analysis, project management, and software development to reach a common understanding with stakeholders on the importance they place on the delivery of each requirement; it is also known as MoSCoW prioritization or MoSCoW analysis.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <img src={MoScoW} className="img-fluid w-70" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div id="siteflow" className="card mt-5">
                  <div className="card-header">
                    Site Flow
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <p>
                          Designing the user experience of a website involves more than figuring out what goes on each page. It’s also about figuring out how those pages flow together. If you don’t plan your page flow, you could run into problems when you begin with the design process.
                        </p>
                      </div>
                    </div>
                    <div className="row text-center">
                      <div className="col-md-12">
                        <img src={siteflow} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div id="assumptions" className="card mt-5">
                  <div className="card-header">
                    Riskiest Assumptions
                  </div>
                  <div className="card-body">
                    <div className="row text-center">
                      <div className="col-md-12">
                        <img src={RiskAnalysis} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div id="wireframes" className="card mt-5">
                  <div className="card-header">
                    Wireframes
                  </div>
                  <div className="card-body">
                    <div className="row text-center">
                      <div className="col-md-12">
                        <img src={wireframes} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div id="design" className="card mt-5 mb-5">
                  <div className="card-header">
                    High Fidelity Design
                  </div>
                  <div className="card-body">
                    <div className="row text-center">
                      <div className="col-md-12">
                        <a href="https://xd.adobe.com/view/6f6a4222-3c55-432f-4b7e-31dbc42c7541-195b/" target="_blank" rel="noopener noreferrer">
                          <img src={DesignLoginPage} className="img-fluid w-25" alt="" />
                        </a>
                      </div>
                      <div className="col-md-12">
                        <a href="https://xd.adobe.com/view/6f6a4222-3c55-432f-4b7e-31dbc42c7541-195b/" target="_blank" rel="noopener noreferrer">
                          Design Link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 d-sm-none d-md-block col-md-2 col-lg-2">
                <div className="floating-menu">
                  <div className="menu-item">
                    <a href="#vision" className="menu-item-link">
                      Vision
                    </a>
                  </div>
                  <div className="menu-item">
                    <a href="#storyboarding" className="menu-item-link">
                      Storyboarding
                    </a>
                  </div>
                  <div className="menu-item">
                    <a href="#MoScoW" className="menu-item-link">
                      MoSCoW Analysis
                    </a>
                  </div>
                  <div className="menu-item">
                    <a href="#siteflow" className="menu-item-link">
                      Site Flow
                    </a>
                  </div>
                  <div className="menu-item">
                    <a href="#assumptions" className="menu-item-link">
                      Risky Assumptions
                    </a>
                  </div>
                  <div className="menu-item">
                    <a href="#wireframes" className="menu-item-link">
                      Wireframes
                    </a>
                  </div>
                  <div className="menu-item">
                    <a href="#design" className="menu-item-link">
                      Design Concept
                    </a>
                  </div>
                  <div className="menu-item mt-4">
                    <a href="/work" className="menu-item-link">
                      <FontAwesomeIcon icon={["fas", "chevron-left"]} />&nbsp;Go Back
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
