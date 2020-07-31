import React, {Component} from 'react';

import WorkPageNavigator from '../util/WorkPageNavigator.jsx';

import Storyboard from '../../images/work/transit-safety/Storyboard.png';

export default class PublicTransitSafety extends Component {
  render() {
    return(
      <div className="main-page-container">
        <div className="work-page-container">

          <div className="row no-gutters">
            <div className="col-sm-12">
              <h1>
                Thesis - Public Transit Safety - Part I
              </h1>
            </div>
            <div className="col-sm-2 heading-separator my-2">
            </div>
          </div>

          <div id="initial" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Initials
              </h5>
            </div>
            <div className="col-sm-12 col-md-7">
              <p>
                According to FBI’s Crime Clock, crime rate in the USA is high. A murder happens every 30 minutes. A rape happens every 4 minutes. A robbery happens every 1.7 minutes.
                These stats are stressful for you and even me. A thought struck in my head - as a UX designer, what can I contribute to society in order to make world better and safer place?
              </p>
            </div>
          </div>

          <div id="targetAudience" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Target Audience
              </h5>
            </div>
            <div className="col-sm-12 col-md-7">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr className="font-weight-bold">
                      <td>Who is the User?</td>
                      <td>... their needs?</td>
                      <td>what challenges they face?</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Every person who commutes on public transit system.</td>
                      <td>To commute hassle free and securely to the destination.</td>
                      <td>They become the victims of bad situations such as theft, physical and verbal abuse.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div id="problemStatement" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Problem Statement
              </h5>
            </div>
            <div className="col-sm-12 col-md-7">
              <p>
                According to the American Public Transportation Association (APTA), people boarded public transportation approximately 34 million times each week, showing an <b>increase of 21% each year</b>. Public transportation is mostly seen to be reliable and feasible as compared to private commutes. <b>More than three-fourths of transit riders (78%) are either currently employed or preparing for employment, and 7% are students.</b>
                Research says 44% of employed individuals find public transportation more convenient than driving private vehicles, and 40% of employed individuals say they do not have an alternate solution due to lack of money or a vehicle. The primary reason for the use of public transportation is to get to work, go to school, visit friends, or for medical appointments. The use of public transportation directly impacts the local economy through revenue generation.
                However, public transit is notorious for violence and fear of violence. Personal security affects many people's decisions to use public transportation. Both acts and perceptions of violence cause loss of ridership and revenues.
                <b>Every year approximately 29,300 "less-serious" crimes and 7,930 "more-serious" crimes are recorded. Disorderly conduct, public drunkenness, fare evasion, and theft are "less-serious" crimes. Narcotics and weapon violations, sexual assault, and physical and verbal abuse are considered to be "serious crimes/offenses."</b>
                These offenses take place despite having a fully-functioning system and prevention strategies by the transit-governing agencies. The government has implemented numerous advanced algorithms and security programs to ensure the safety and security of the passengers. There are applications in the market that show live crime updates in the area.
                <b> Despite all that, people still feel insecure boarding the transit facility at any given time.</b>
              </p>
            </div>
          </div>

          <div id="howMightWe" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                How Might We?
              </h5>
            </div>
            <div className="col-sm-12 col-md-7">
              <p>
                How might we increase ridership for public transit and render a safe and secure experience for daily commuters who are obligated to commute using public transportation?
              </p>
            </div>
          </div>

          <div id="userInterviews" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                User Interviews
              </h5>
            </div>
            <div className="col-sm-12 col-md-7">
              <p>
                I took <b>12 interviews in total, ~40 min/each conversation.</b>
                My target audience were students, newly employed, and general public transit commuters.
                These are some examples of my user interviews -
              </p>
              <ul>
                <li>Frequently visited places on a weekly basis?</li>
                <li>How the commute to these places take place?</li>
                <li>How’s the commute experience? (public vs private)</li>
                <li>How safety and security matters?</li>
                <li>How does safety & security changes your perspective of traveling on public commute?</li>
              </ul>
            </div>
          </div>

          <div id="storyboard" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Storyboard
              </h5>
            </div>
            <div className="col-sm-12 col-md-7">
              <img src={Storyboard} className="img-fluid img-thumbnail" />
            </div>
          </div>

          <div className="row work-tab">
            <div className="col-sm-12 offset-md-2 col-md-7">
              <div className="row text-center mb-5">
                <div className="col-md-6">
                  <a href="/work/step-up" type="button" className="btn btn-default d-block">
                    Prev: StepUp
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="/work/karishma-joshi-website" type="button" className="btn btn-default d-block">
                    Next: Karishma's Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-md-none d-lg-block">
          <WorkPageNavigator linkNames={["initial", "targetAudience", "problemStatement", "howMightWe", "userInterviews", "storyboard"]} />
        </div>
      </div>
    );
  }
}
