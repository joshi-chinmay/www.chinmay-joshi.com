import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import HookedMBL from '../../images/work/StepUp/Hooked-BML.png';
import MoScoW from '../../images/work/StepUp/MoSCoW.jpg';
import siteflow from '../../images/work/StepUp/Sitefllow.png';
import RiskAnalysis from '../../images/work/StepUp/Risky Assumptions Metrics.jpg';
import wireframe1 from '../../images/work/StepUp/wireframes/WF set 1.png';
import wireframe2 from '../../images/work/StepUp/wireframes/WF set 2.png';
import DesignLoginPage from '../../images/work/StepUp/DesignLoginPage.png';

import SB1 from '../../images/work/StepUp/storyboarding/SB1.jpg';
import SB2 from '../../images/work/StepUp/storyboarding/SB2.jpg';
import SB3 from '../../images/work/StepUp/storyboarding/SB3.jpg';
import SB4 from '../../images/work/StepUp/storyboarding/SB4.jpg';
import SB5 from '../../images/work/StepUp/storyboarding/SB5.jpg';
import SB6 from '../../images/work/StepUp/storyboarding/SB6.jpg';
import SB7 from '../../images/work/StepUp/storyboarding/SB7.jpg';
import SB8 from '../../images/work/StepUp/storyboarding/SB8.jpg';
import SB9 from '../../images/work/StepUp/storyboarding/SB9.jpg';

import WorkPageNavigator from '../util/WorkPageNavigator.jsx';

export default class StepUp extends Component {
  render() {
    return(
      <div className="main-page-container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <h2>
              StepUp
            </h2>
          </div>
        </div>

        <div className="work-page-container">
          <div id="vision" className="row work-tab animate-on-hover">
            <div className="col-sm-12 col-md-3 col-lg-2 text-right pr-4">
              <h1 className="work-title-icon">
                <FontAwesomeIcon icon={["fas", "rocket"]} className="text-muted" />
              </h1>
              <h6 className="work-title">
                Vision
              </h6>
            </div>
            <div className="col-sm-12 col-md-8 pl-5">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    StepUp is a mobile application, focused on Jefferson University students and staff to help them maintain a healthy lifestyle by taking extra steps in a day.
                  </p>
                  <p>
                    While designing this product, build - measure - learn cycle as a development.
                    The application follows HOOKED framework, widely known for designing habit-forming products.
                  </p>
                </div>
                <div className="col-md-12 text-center h6 mt-3">
                  1. Trigger <FontAwesomeIcon icon={["fas", "lightbulb"]} className="text-muted text-warning" /> &nbsp;&nbsp;
                  2. Action <FontAwesomeIcon icon={["fas", "play"]} className="text-muted text-warning" /> &nbsp;&nbsp;
                  3. Reward <FontAwesomeIcon icon={["fas", "gifts"]} className="text-muted text-warning" /> &nbsp;&nbsp;
                  4. Investment <FontAwesomeIcon icon={["fas", "piggy-bank"]} className="text-muted text-warning" /> &nbsp;&nbsp;
                </div>
                <div className="col-md-12 text-center mt-4">
                  <img src={HookedMBL} className="img-fluid w-50" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div id="storyboarding" className="row work-tab animate-on-hover">
            <div className="col-sm-12 col-md-3 col-lg-2 text-right pr-4">
              <h1 className="work-title-icon">
                <FontAwesomeIcon icon={["fas", "comments"]} className="text-muted" />
              </h1>
              <h6 className="work-title">
                Storyboard
              </h6>
            </div>
            <div className="col-sm-12 col-md-8 pl-5">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    As I followed HOOKED Framework - the first step is to identify a trigger. So for that, I created a story about how users would get to know about this app.
                  </p>
                </div>
                <div className="col-md-12 text-center mt-5">
                  <div className="row no-gutters">
                    <div className="col-md-4 p-2">
                      <img src={SB1} className="img-fluid w-50" alt="" />
                      <br />
                      <small>The user is walking in the college, and sees a campaign going on.</small>
                    </div>
                    <div className="col-md-4 p-2">
                      <img src={SB2} className="img-fluid w-50" alt="" />
                      <br />
                      <small>He likes the concept and decides to sign up.</small>
                    </div>
                    <div className="col-md-4 p-2">
                      <img src={SB3} className="img-fluid w-50" alt="" />
                      <br />
                      <small>Next morning he wakes up early because he wants to go for a run.</small>
                    </div>
                    <div className="col-md-4 p-2">
                      <img src={SB4} className="img-fluid w-50" alt="" />
                      <br />
                      <small>He opens the app and sets up the route using the smart suggestions.</small>
                    </div>
                    <div className="col-md-4 p-2">
                      <img src={SB5} className="img-fluid w-50" alt="" />
                      <br />
                      <small>He goes for a long run.</small>
                    </div>
                    <div className="col-md-4 p-2">
                      <img src={SB6} className="img-fluid w-50" alt="" />
                      <br />
                      <small>He feels very tired. Phew.</small>
                    </div>
                    <div className="col-md-4 p-2">
                      <img src={SB7} className="img-fluid w-50" alt="" />
                      <br />
                      <small>After his successful run he receives the notification saying he just received a 10% off at the canteen.</small>
                    </div>
                    <div className="col-md-4 p-2">
                      <img src={SB8} className="img-fluid w-50" alt="" />
                      <br />
                      <small>He feels very happy and energetic.</small>
                    </div>
                    <div className="col-md-4 p-2">
                      <img src={SB9} className="img-fluid w-50" alt="" />
                      <br />
                      <small>That's not it, he receives another notification at 10 PM, motivating him for another run the very next morning.</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="moscowAnalysis" className="row work-tab animate-on-hover">
            <div className="col-sm-12 col-md-3 col-lg-2 text-right pr-4">
              <h1 className="work-title-icon">
                <FontAwesomeIcon icon={["fas", "chart-bar"]} className="text-muted" />
              </h1>
              <h6 className="work-title">
                MoSCoW Analysis
              </h6>
            </div>
            <div className="col-sm-12 col-md-8 pl-5">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    The MoSCoW method is a prioritization technique used in management, business analysis, project management, and software development to reach a common understanding with stakeholders on the importance they place on the delivery of each requirement; it is also known as MoSCoW prioritization or MoSCoW analysis.
                  </p>
                </div>
                <div className="col-md-12 text-center mt-5">
                  <img src={MoScoW} className="img-fluid w-70" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div id="siteflow" className="row work-tab animate-on-hover">
            <div className="col-sm-12 col-md-3 col-lg-2 text-right pr-4">
              <h1 className="work-title-icon">
                <FontAwesomeIcon icon={["fas", "sitemap"]} className="text-muted" />
              </h1>
              <h6 className="work-title">
                Site Flow
              </h6>
            </div>
            <div className="col-sm-12 col-md-8 pl-5">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    Designing the user experience of a website involves more than figuring out what goes on each page. It’s also about figuring out how those pages flow together. If you don’t plan your page flow, you could run into problems when you begin with the design process.
                  </p>
                </div>
                <div className="col-md-12 text-center mt-4">
                  <img src={siteflow} className="img-fluid w-75" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div id="riskyAssumptions" className="row work-tab animate-on-hover">
            <div className="col-sm-12 col-md-3 col-lg-2 text-right pr-4">
              <h1 className="work-title-icon">
                <FontAwesomeIcon icon={["fas", "balance-scale-right"]} className="text-muted" />
              </h1>
              <h6 className="work-title">
                Riskiest Assumptions
              </h6>
            </div>
            <div className="col-sm-12 col-md-8 pl-5">
              <div className="row">
                <div className="col-md-12 text-center">
                  <img src={RiskAnalysis} className="img-fluid w-75" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div id="wireframes" className="row work-tab animate-on-hover">
            <div className="col-sm-12 col-md-3 col-lg-2 text-right pr-4">
              <h1 className="work-title-icon">
                <FontAwesomeIcon icon={["fas", "network-wired"]} className="text-muted" />
              </h1>
              <h6 className="work-title">
                Wireframes
              </h6>
            </div>
            <div className="col-sm-12 col-md-8 pl-5">
              <Carousel showStatus={false} showIndicators={false} useKeyboardArrows={true} autoPlay interval={3000} infiniteLoop>
                <div>
                  <img src={wireframe1} alt="" className="w-75" />
                </div>
                <div>
                  <img src={wireframe2} alt="" className="w-75" />
                </div>
              </Carousel>
            </div>
          </div>

          <div id="design" className="row work-tab animate-on-hover">
            <div className="col-sm-12 col-md-3 col-lg-2 text-right pr-4">
              <h1 className="work-title-icon">
                <FontAwesomeIcon icon={["fas", "mobile-alt"]} className="text-muted" />
              </h1>
              <h6 className="work-title">
                High Fidelity Design
              </h6>
            </div>
            <div className="col-sm-12 col-md-8 pl-5 text-center">
              <a href="https://xd.adobe.com/view/6f6a4222-3c55-432f-4b7e-31dbc42c7541-195b/" target="_blank" rel="noopener noreferrer">
                <img src={DesignLoginPage} className="img-fluid w-25" alt="" />
              </a>
              <br />
              <a href="https://xd.adobe.com/view/6f6a4222-3c55-432f-4b7e-31dbc42c7541-195b/" target="_blank" rel="noopener noreferrer">
                Design Link
              </a>
            </div>
          </div>

          <div className="row work-tab">
            <div className="col-sm-12 offset-md-2 col-md-8 pl-5">
              <div className="row text-center mb-5">
                <div className="col-md-6">
                  <a href="/work/tilt" type="button" className="btn btn-warning d-block">
                    Prev: TILT
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="/work/randomcolorpicker" type="button" className="btn btn-warning d-block">
                    Next: Random Color Picker
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-md-none d-lg-block">
          <WorkPageNavigator linkNames={["vision", "storyboarding", "moscowAnalysis", "siteflow", "riskyAssumptions", "wireframes", "design"]} />
        </div>

        <div className="scroll-overlay">
        </div>
      </div>
    );
  }
}
