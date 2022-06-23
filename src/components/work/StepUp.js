import React, {Component} from 'react';

import WorkTabLandingInfo from '../util/WorkTabLandingInfo';
import NextLink from '../util/NextLink';

import StepUpMockUP from '../../images/work/StepUp/Artboard.png';

import HookedMBL from '../../images/work/StepUp/Hooked-BML.png';
import MoScoW from '../../images/work/StepUp/MoSCoW.jpg';
import Storyboard from '../../images/work/StepUp/Storyboard.jpg';
import siteflow from '../../images/work/StepUp/Sitefllow.png';
import RiskAnalysis from '../../images/work/StepUp/RiskyAssumptions.jpg';

import wireframe1 from '../../images/work/StepUp/wireframes/WF set 1.png';
import wireframe2 from '../../images/work/StepUp/wireframes/WF set 2.png';

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
        <WorkTabLandingInfo
          pageHeading="StepUp - A Fitness App"
          classList={"bg-pastel-baby-pink full-bleed"}
          pageDescription="Gamified and rewarding user experience to walk extra steps every day. Solution tailored for Jefferson University's students."
          tags={["User Research", "UX Design", "Visual Design", "Rapid Prototyping"]}
          landingPageImage={StepUpMockUP}
          jumpToProto="#wireframes"
        />

        <div className="work-page-presnetation">
          <div className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                Approach
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <p>
                StepUp is a mobile applicationn, <b>focused on Jefferson University students and staff to help them maintain a healthy lifestyle by taking extra steps in a day.</b>
                <br /><br />
                While designing this product, I used <b>build - measure - learn's</b> iterative cycle. The applicationn follows <b>HOOKED framework, widely known for designing habit-forming products.</b>
                <br /><br />
                In the background I was <b>reading a widely popular book <a href="https://www.google.com/books/edition/Hooked/dsz5AwAAQBAJ?hl=en&gbpv=0" target="_blank" rel="noopener noreferrer">'Hooked - by Nir Eyal.'</a></b>
              </p>
              <div className="col-md-12 text-center mt-4">
                <img src={HookedMBL} className="img-fluid w-50" alt="Hooked Model" />
              </div>
            </div>
          </div>

          <div className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                Contextual Enquiry
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <span>
                To start the process of designing a product, <b>I interviewed 15 people - including college students and faculty.</b> And, interview findings were intriguing.
              </span>
              <ol className="mt-4">
                <li>70% of the audience preferred walking over running.</li>
                <li>Students & Staff often use health apps to track their steps, being the most relevant factor.</li>
                <li>Average step count is - 6750, which is way below desired (12,000) step count.</li>
                <li>Very few people track their calorie intake.</li>
              </ol>

              <p className="mt-5">
                <b>Through the primary research I came to a conclusion that students and faculty is not aware of healthy habits.</b> According to American Standards, a common man is supposed to take 12,000 steps per day to maintain healthy lifestyle.
                <b>Hence, I decided to take steps towards designing an experience that'd help my audience take extra steps per day.</b>
                <br />
              </p>
            </div>
          </div>

          <div className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                Storyboard
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <p>
                <b>My goal was set. I was designing a mobile application experience that'd help students form a habit to successfully take extra steps per day.</b>
                <br /><br />
                The book inspired me to create a habit forming product by defining triggers and actions based on user's activity. Below is a story of a college student who joins the university and gets introduced to a new app StepUp.
              </p>

              <div className="my-5 mx-4">
                <img src={Storyboard} className="img-fluid " alt="Storyboard based on Hooked Model. Trigger Action Reward Investment" />
              </div>

              <p className="mt-5 font-weight-bold">
                Using different theories introduced in the book, I decided to create a real-time reward based on number of steps taken per day. Every step taken after 12,000 counts as a reward, which can be redeemed at the University's campus store and cafeteria.
              </p>
            </div>
          </div>

          <div className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                MoSCoW Analysis
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <p>
                Next step in designing a product was to define a feature list and kick off unwanted features. Not everything can be achieved in one day.
                <b>I used MoScoW principles, to prioratize feature list based on time as well as technical feasibilities</b>
              </p>
              <div className="mt-5">
                <img src={MoScoW} className="img-fluid" alt="MoScoW analysis" />
              </div>
            </div>
          </div>

          <div className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                Siteflow
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <p>
                Designing the user experience of a website involves more than figuring out what goes on each page. It’s also about figuring out how those pages flow together. <b>Creating a site flow helped me understand amount of interfaces my applicationn would have. It also helped me prioritize pages and content on the pages.</b>
              </p>
              <div className="mt-5">
                <img src={siteflow} className="img-fluid" alt="Siteflow for the app" />
              </div>
            </div>
          </div>

          <div className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                Riskiest Assumptions Metrics
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <h5 className="mt-3">Top 3 riskiest assumptions -</h5>
              <ol>
                <li>Validate if the user will check in-app notifications every night?</li>
                <li>Validate if the the user will run on different routes suggested by the app engine?</li>
                <li>Validate if the on-campus stores and cafeteria will provide discounts for the purchased goods?</li>
              </ol>
              <img src={RiskAnalysis} className="img-fluid" alt="Risky Assumptions Matrics" />
            </div>
          </div>

          <div className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                Pretotyping
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <p>
                Based on the the riskiest assumptions analysis, I decided to validate if the user is willing to run on different routes using a pretotype, using re-label method. I modified a Google Map, added couple of health stats, selected dummy routes, and asked audience if they would like to receive such stats from the Maps app they use.
                <br /><br />
                <b>This step especially helps when the product is in the early stagees. I could simply validate my assumption and change direction of the product.</b>
              </p>
              <div className="row mt-4 mb-5">
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
              <div className="mt-5">
                <p>
                  Result was <b>out of 16 people, 15 people agreed and were happy to see such stats in the map.</b> This method helped me validate to invest time in focusing on user's needs, priorities and decision making.
                </p>
              </div>
            </div>
          </div>

          <div id="wireframes" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                Wireframes
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <img src={wireframe1} alt="wireframes for step up" className="img-fluid" />
              <img src={wireframe2} alt="wireframes for step up" className="img-fluid" />
            </div>
          </div>

          <div className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                Introducing - Prototype on Sketch
              </h5>
            </div>
            <div className="col-sm-12 col-md-10 text-center">
              <p>
                Prototype available on Sketch - 
                <a href="https://www.sketch.com/s/2c3e6810-3e4c-44a4-9772-b54379e1a594/a/mAykqV/play" target="_blank" rel="noopener noreferrer">
                  click here to view.
                </a>
              </p>
              <a href="https://www.sketch.com/s/2c3e6810-3e4c-44a4-9772-b54379e1a594/a/mAykqV/play" target="_blank" rel="noopener noreferrer">
                <img src={StepUpMockUP} className="img-fluid" alt="design login page and link to prototype" />
              </a>
            </div>
          </div>

          <NextLink nextLink={{ name: "Pathways To Housing", slug: "/pathways-to-housing"}} />
        </div>
      </div>
    );
  }
}
