import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NextLink from '../util/NextLink.jsx';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import StepUpMockUP from '../../images/work/StepUp/Artboard.png';

import HookedMBL from '../../images/work/StepUp/Hooked-BML.png';
import MoScoW from '../../images/work/StepUp/MoSCoW.jpg';
import siteflow from '../../images/work/StepUp/Sitefllow.png';
import RiskAnalysis from '../../images/work/StepUp/Risky Assumptions Metrics.jpg';

import wireframe1 from '../../images/work/StepUp/wireframes/WF set 1.png';
import wireframe2 from '../../images/work/StepUp/wireframes/WF set 2.png';

import stat1 from '../../images/work/StepUp/interviews/stat1.png';
import stat2 from '../../images/work/StepUp/interviews/stat2.png';
import stat3 from '../../images/work/StepUp/interviews/stat3.png';
import stat4 from '../../images/work/StepUp/interviews/stat4.png';
import stat5 from '../../images/work/StepUp/interviews/stat5.png';
import stat6 from '../../images/work/StepUp/interviews/stat6.png';
import stat7 from '../../images/work/StepUp/interviews/stat7.png';
import stat8 from '../../images/work/StepUp/interviews/stat8.png';
import stat9 from '../../images/work/StepUp/interviews/stat9.png';
import stat10 from '../../images/work/StepUp/interviews/stat10.png';

import SB1 from '../../images/work/StepUp/storyboarding/SB1.jpg';
import SB2 from '../../images/work/StepUp/storyboarding/SB2.jpg';
import SB3 from '../../images/work/StepUp/storyboarding/SB3.jpg';
import SB4 from '../../images/work/StepUp/storyboarding/SB4.jpg';
import SB5 from '../../images/work/StepUp/storyboarding/SB5.jpg';
import SB6 from '../../images/work/StepUp/storyboarding/SB6.jpg';
import SB7 from '../../images/work/StepUp/storyboarding/SB7.jpg';
import SB8 from '../../images/work/StepUp/storyboarding/SB8.jpg';
import SB9 from '../../images/work/StepUp/storyboarding/SB9.jpg';

import preto1 from '../../images/work/StepUp/pretotype/preto-1.png';
import preto2 from '../../images/work/StepUp/pretotype/preto-2.png';
import preto3 from '../../images/work/StepUp/pretotype/preto-3.png';

export default class StepUp extends Component {
  componentDidMount() {
    document.title = "Step Up - A Fitness App | Chinmay Joshi";
  }

  render() {
    return(
      <div className="work-page-container">
        <div className="row work-landing-page full-bleed">
          <div className="col-sm-12 col-md-5">
            <div className="work-tab-landing-page-title">
              <h1 className="mb-2">StepUp - A Fitness App</h1>
              <p className="mt-5">
                Gamified experience to walk extra steps every day.
                <br />Solution tailored for Jefferson University's students.
              </p>

              <span className="d-block mt-2">
                Research | UX Design | Visual Design | Rapid Prototyping
              </span>
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <img src={StepUpMockUP} className="img-fluid" alt="Step Up application blob" />
          </div>
        </div>

        <div className="container work-page-presnetation">
          <div id="vision" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Vision
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <span>
                StepUp is a mobile applicationn, focused on Jefferson University students and staff to help them maintain a healthy lifestyle by taking extra steps in a day.
                <br /><br />
                While designing this product, build - measure - learn cycle as a development. The applicationn follows HOOKED framework, widely known for designing habit-forming products.
              </span>
              <div className="col-md-12 text-center h6 mt-4">
                Trigger <FontAwesomeIcon icon={["fas", "lightbulb"]} className="text-muted text-warning" />&nbsp;&nbsp;&nbsp;&nbsp;
                Action <FontAwesomeIcon icon={["fas", "play"]} className="text-muted text-warning" />&nbsp;&nbsp;&nbsp;&nbsp;
                Reward <FontAwesomeIcon icon={["fas", "gifts"]} className="text-muted text-warning" />&nbsp;&nbsp;&nbsp;&nbsp;
                Investment <FontAwesomeIcon icon={["fas", "piggy-bank"]} className="text-muted text-warning" />&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <div className="col-md-12 text-center mt-4">
                <img src={HookedMBL} className="img-fluid w-50" alt="Hooked Model" />
              </div>
            </div>
          </div>

          <div id="interviews" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                User Interviews
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <div className="bg-white-images">
                <Carousel showStatus={false} showIndicators={false} useKeyboardArrows={true} autoPlay interval={3000} infiniteLoop>
                  <div>
                    <img src={stat1} alt="carousel statestics" className="w-50" />
                  </div>
                  <div>
                    <img src={stat2} alt="carousel statestics" className="w-50" />
                  </div>
                  <div>
                    <img src={stat3} alt="carousel statestics" className="w-50" />
                  </div>
                  <div>
                    <img src={stat4} alt="carousel statestics" className="w-50" />
                  </div>
                  <div>
                    <img src={stat5} alt="carousel statestics" className="w-50" />
                  </div>
                  <div>
                    <img src={stat6} alt="carousel statestics" className="w-50" />
                  </div>
                  <div>
                    <img src={stat7} alt="carousel statestics" className="w-50" />
                  </div>
                  <div>
                    <img src={stat8} alt="carousel statestics" className="w-50" />
                  </div>
                  <div>
                    <img src={stat9} alt="carousel statestics" className="w-50" />
                  </div>
                  <div>
                    <img src={stat10} alt="carousel statestics" className="w-50" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>

          <div id="storyboarding" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Storyboard
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <span>
                As I followed HOOKED Framework - the first step is to identify a trigger. So for that, I created a story about how users would get to know about this app.
              </span>
              <div className="col-md-12 text-center mt-5">
                <div className="row">
                  <div className="col-md-4 p-2">
                    <img src={SB1} className="img-fluid" alt="storyboard grid" />
                    <small>The user is walking in the college, and sees a campaign going on.</small>
                  </div>
                  <div className="col-md-4 p-2">
                    <img src={SB2} className="img-fluid" alt="storyboard grid" />
                    <small>He likes the concept and decides to sign up.</small>
                  </div>
                  <div className="col-md-4 p-2">
                    <img src={SB3} className="img-fluid" alt="storyboard grid" />
                    <small>Next morning he wakes up early because he wants to go for a run.</small>
                  </div>
                  <div className="col-md-4 p-2">
                    <img src={SB4} className="img-fluid" alt="storyboard grid" />
                    <small>He opens the app and sets up the route using the smart suggestions.</small>
                  </div>
                  <div className="col-md-4 p-2">
                    <img src={SB5} className="img-fluid" alt="storyboard grid" />
                    <small>He goes for a long run.</small>
                  </div>
                  <div className="col-md-4 p-2">
                    <img src={SB6} className="img-fluid" alt="storyboard grid" />
                    <small>He feels very tired. Phew.</small>
                  </div>
                  <div className="col-md-4 p-2">
                    <img src={SB7} className="img-fluid" alt="storyboard grid" />
                    <small>After his successful run he receives the notification saying he just received a 10% off at the canteen.</small>
                  </div>
                  <div className="col-md-4 p-2">
                    <img src={SB8} className="img-fluid" alt="storyboard grid" />
                    <small>He feels very happy and energetic.</small>
                  </div>
                  <div className="col-md-4 p-2">
                    <img src={SB9} className="img-fluid" alt="storyboard grid" />
                    <small>That's not it, he receives another notification at 10 PM, motivating him for another run the very next morning.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="moscowAnalysis" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                MoSCoW Analysis
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <span>
                The MoSCoW method is a prioritization technique used in management, business analysis, project management, and software development to reach a common understanding with stakeholders on the importance they place on the delivery of each requirement; it is also known as MoSCoW prioritization or MoSCoW analysis.
              </span>
              <div className="mt-5">
                <img src={MoScoW} className="img-fluid w-70" alt="MoScoW analysis" />
              </div>
            </div>
          </div>

          <div id="siteflow" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Siteflow
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <span>
                Designing the user experience of a website involves more than figuring out what goes on each page. It’s also about figuring out how those pages flow together.
                Creating a site flow helped me understand amount of interfaces my applicationn would have. It also helped me prioritize pages.
              </span>
              <div className="mt-5">
                <img src={siteflow} className="img-fluid" alt="Siteflow for the app" />
              </div>
            </div>
          </div>

          <div id="riskyAssumptions" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Riskiest Assumptions Metrics
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <div className="row">
                <div className="col-md-12">
                  <h6 className="mt-3">Top 3 riskiest assumptions -</h6>
                  <ol>
                    <li>Validate if the user will check in-app notifications every night?</li>
                    <li>Validate if the the user will run on different routes suggested by the app engine?</li>
                    <li>Validate if the on-campus stores and cafeteria will provide discounts for the purchased goods?</li>
                  </ol>
                </div>
                <div className="col-md-12 mx-auto text-center mt-4">
                  <img src={RiskAnalysis} className="img-fluid w-50" alt="Risky Assumptions Matrics" />
                </div>
              </div>
            </div>
          </div>

          <div id="pretotyping" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Pretotyping
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <span>
                For designing a habit forming product I was following a book `HOOKED` by a former Googler Nir Eyal. He teaches about how to carefully avoid failures validate designs and methods taking place while designing an experience.
              </span>
              <br />
              <span>
                Based on the the riskiest assumptions analysis, I decided to validate if the user is willing to run on different routes using a pretotype, using re-label method. I modified a Google Map, added couple of health stats, selected dummy routes, and asked audience if they would like to receive such stats from the Maps app they use.
              </span>
              <div className="row mt-4">
                <div className="col-md-6">
                  <img src={preto1} className="img-fluid img-thumbnail" alt="Examples of Pretotypes" />
                </div>
                <div className="col-md-6">
                  <img src={preto2} className="img-fluid img-thumbnail" alt="Examples of Pretotypes" />
                </div>
                <div className="col-md-12 text-center mt-4">
                  <img src={preto3} className="img-fluid img-thumbnail w-50" alt="Examples of Pretotypes" />
                </div>
              </div>
              <div className="mt-4">
                <span>
                  Result was out of 16 people, 15 people agreed and were happy to see such stats in the map. This method helped me validate to invest time in focusing on user's needs, priorities and decision making.
                </span>
              </div>
            </div>
          </div>

          <div id="wireframes" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Wireframes
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <Carousel showStatus={false} showIndicators={false} useKeyboardArrows={true} autoPlay interval={3000} infiniteLoop>
                <div>
                  <img src={wireframe1} alt="Carousel slide for wireframes" className="img-fluid" />
                </div>
                <div>
                  <img src={wireframe2} alt="Carousel slide for wireframes" className="img-fluid" />
                </div>
              </Carousel>
            </div>
          </div>

          <div id="design" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Introducing - Prototype on Sketch
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <a href="https://www.sketch.com/s/2c3e6810-3e4c-44a4-9772-b54379e1a594/a/mAykqV/play" target="_blank" rel="noopener noreferrer">
                <img src={StepUpMockUP} className="img-fluid" alt="design login page and link to prototype" />
              </a>
            </div>
          </div>

          <NextLink nextLink={{name: "TILT - Today I Listened To", slug: "/tilt"}} />
        </div>
      </div>
    );
  }
}
