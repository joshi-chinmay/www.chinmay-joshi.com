import React, {Component} from 'react';

import NextLink from '../util/NextLink';

import TransitSafety from '../../images/illustrations/transit-safety.svg';
import Storyboard from '../../images/work/transit-safety/Storyboard.png';
import Persona1 from '../../images/work/transit-safety/user-persona/persona-1.jpg';
import Persona2 from '../../images/work/transit-safety/user-persona/persona-2.jpg';
import Persona3 from '../../images/work/transit-safety/user-persona/persona-3.jpg';
import Comp1 from '../../images/work/transit-safety/competitors/comp1.jpeg';
import Comp2 from '../../images/work/transit-safety/competitors/comp2.jpeg';
import Comp3 from '../../images/work/transit-safety/competitors/comp3.jpeg';

import Brainmap from '../../images/work/transit-safety/Brainmap - Transit Safety.jpg';

export default class PublicTransitSafety extends Component {
  componentDidMount() {
    document.title = "Thesis - Public Transit Safety | Chinmay Joshi";
  }

  render() {
    return(
      <div className="work-page-container">

        <div className="row work-landing-page">
          <div className="col-sm-12 col-md-5">
            <div className="work-tab-landing-page-title">
              <h1 className="mb-2">Thesis - Public Transit Safety</h1>
              <p className="mt-5">
                UX research directed toward a optimum solution to create a safe transit experience for everyday commuters.
              </p>

              <span className="d-block mt-2">
                UX Research | Quantitative Research | User Interviews
              </span>
            </div>
          </div>

          <div className="col-sm-12 col-md-7 text-center">
            <img src={TransitSafety} className="img-fluid w-85" alt="Public transit safety blob" />
          </div>
        </div>

        <div className="container work-page-presnetation">
          <div id="initial" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Initials
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <p>
                According to FBI’s Crime Clock, crime rate in the USA is high. A murder happens every 30 minutes. A rape happens every 4 minutes. A robbery happens every 1.7 minutes.
                These stats are stressful for you and even me. A thought struck in my head - as a UX designer, what can I contribute to society in order to make world better and safer place?
              </p>
              <p className="text-danger">
                According to Transit Research Cooperative Program -
                Forty-five agencies surveyed and recorded just over 37,000 offenses. Of the total, approximately 29,000 (78 percent) were less serious, and 8,000 (22 percent) were serious.
              </p>
            </div>
          </div>

          <div id="targetAudience" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Target Audience
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
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
            <div className="col-sm-12 col-md-10">
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
            <div className="col-sm-12 col-md-10">
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
            <div className="col-sm-12 col-md-10">
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

          <div id="brainmap" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Brainmap
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <img src={Brainmap} className="img-fluid img-thumbnail" alt="brainmap of user interviews" />
            </div>
          </div>

          <div id="userPersona" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                User Persona
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <div className="table-responsive">
                <table className="table table-borderless table-user-persona">
                  <tbody>
                    <tr>
                      <td>
                        <img src={Persona1} className="img-fluid img-thumbnail" alt="user personal profile" />
                        <small>Photo by KAL VISUALS on Unsplash</small>
                      </td>
                      <td>
                        <img src={Persona2} className="img-fluid img-thumbnail" alt="user personal profile" />
                        <small>Photo by Evan Dvorkin on Unsplash</small>
                      </td>
                      <td>
                        <img src={Persona3} className="img-fluid img-thumbnail" alt="user personal profile" />
                        <small>Photo by Christiana Rivers on Unsplash</small>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>User #1</h6>
                        Anabel Wallace<br />
                        <small>Data Analyst at Realtor.com</small>
                      </td>
                      <td>
                        <h6>User #2</h6>
                        Brook Curtis<br />
                        <small>Software Engineer at Salesforce</small>
                      </td>
                      <td>
                        <h6>User #3</h6>
                        Britney Brooks<br />
                        <small>UX Designer and Freelancer</small>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul className="small">
                          <li>I don’t have accessible public transit near my office. Hence, I take my car with me every day.</li>
                          <li>Uber is pretty expensive.</li>
                          <li>When I was in the university, I had to switch 2 trains every day.</li>
                          <li>At times due to transit delays I have attended my lectures while I was on the public transit.</li>
                          <li>My safety measures were violated by a homeless/drunk man who was on the same train as me. Since then I decided not to rely much on public transport.</li>
                          <li>Family constantly worries about my safety as we live miles apart.</li>
                        </ul>
                      </td>
                      <td>
                        <ul className="small">
                          <li>I take the train every day. My office is in the heart of San Francisco. In the morning a lot of office workers board the train. But in the evening you may never know who’d be there.</li>
                          <li>I have been physically and verbally abused by a drunk man. He pissed all over himself and it was a chaos in the train.</li>
                          <li>I have seen many homeless people on the train station, they follow and bug people for money and food. They don’t usually harm you but sometimes there’s use of abusive language.</li>
                          <li>In the evening I have to keep an eye on my belongings because I don’t know if pickpocketer would snatch something from me.</li>
                        </ul>
                      </td>
                      <td>
                        <ul className="small">
                          <li>To me public transport has always been a scary experience. I am afraid of people who board the train and bus.</li>
                          <li>At times, transit facilities are smelly and it feels unhygienic.</li>
                          <li>I take public transit if and only if I have company.</li>
                          <li>My friends have shared many bad stories of public transit which includes verbal abuse and public drunkenness.</li>
                          <li>I used to visit nearest Starbucks and wait for my train to arrive. Once I see the train I used to leave the premise to board the train.</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div id="secondaryResearch" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Secondary Research
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <p>Primary Research Material -</p>
                  <ul className="small">
                    <li>
                      Transit cooperative research program - Improving transit security -
                      <a href="http://onlinepubs.trb.org/onlinepubs/tcrp/tsyn21.pdf" className="text-lowercase" target="_blank" rel="noopener noreferrer">link</a>
                    </li>
                    <li>
                      APTA (American Public Transportation Association) Who Rides Public Transportation -
                      <a href="https://www.apta.com/wp-content/uploads/Resources/resources/reportsandpublications/Documents/APTA-Who-Rides-Public-Transportation-2017.pdf" className="text-lowercase" target="_blank" rel="noopener noreferrer">link</a>
                    </li>
                    <li>
                      Performance Measurements Jun 2018.xlsx - BART police -
                      <a href="https://www.bart.gov/sites/default/files/docs/Performance%20Measurements%20Jun%202018.pdf" className="text-lowercase" target="_blank" rel="noopener noreferrer">link</a>
                    </li>
                    <li>
                      APTA - Public Transit and Social Responsibility: Homelessness -
                      <a href="https://www.apta.com/wp-content/uploads/Transit_Responses_Homeless/REPORT-2018-Leadership-APTA-Team-4-Public-Transit-and-Social-Responsibility.pdf" className="text-lowercase" target="_blank" rel="noopener noreferrer">link</a>
                    </li>
                    <li>
                      Public Transportation Facts -
                      <a href="https://www.apta.com/news-publications/public-transportation-facts/" className="text-lowercase" target="_blank" rel="noopener noreferrer">link</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12 col-md-6">
                  <p>Current Implementated Strategies to increase transit safety -</p>
                  <ul className="small">
                    <li>Deploy uniformed patrol officers.</li>
                    <li>Cameras on coaches to reduce juvenile disturbances.</li>
                    <li>Keyless entry to transit systems.</li>
                    <li>Community Outreach - crime-stopper programs.</li>
                    <li>Seminars in schools and colleges.</li>
                    <li>Gang/violence awareness training for operators.</li>
                    <li>Lightning on the transportation hubs.</li>
                    <li>Fencing systems to mark the perimeter.</li>
                    <li>Security alarm - silent alarm and call to nearby authorities.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div id="storyboard" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Storyboard
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <img src={Storyboard} className="img-fluid img-thumbnail" alt="storyboard of a girl who struggles through the issues of public transit safety" />
            </div>
          </div>

          <div id="competitorAnalysis" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Competitor Analysis
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <div className="table-responsive">
                <table className="table table-borderless table-competitors">
                  <tbody>
                    <tr className="text-center">
                      <td>
                        <img src={Comp1} alt="competitor applications" className="img-fluid img-thumbnail" />
                      </td>
                      <td>
                        <img src={Comp2} alt="competitor applications" className="img-fluid img-thumbnail" />
                      </td>
                      <td>
                        <img src={Comp3} alt="competitor applications" className="img-fluid img-thumbnail" />
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>Transit App</td>
                      <td>Citizen</td>
                      <td>Citymapper</td>
                    </tr>
                    <tr>
                      <td>
                        <ul className="small">
                          <li>Real-time updates of your ride.</li>
                          <li>Plans future trips using AI.</li>
                          <li>Real time stats - time to leave, fastest route.</li>
                          <li>Integration with Uber, Bikeshare, Carshare.</li>
                        </ul>
                      </td>
                      <td>
                        <ul className="small">
                          <li>Real-time, lifesaving alerts.</li>
                          <li>Alerts go out within 90 seconds of a 911 or user report and are verified by trained Citizen agents.</li>
                          <li>Live videos and streams.</li>
                        </ul>
                      </td>
                      <td>
                        <ul className="small">
                          <li>Journey planner includes travel plans and daily routes.</li>
                          <li>Real-time updates of your ride.</li>
                          <li>A friend can follow your trip and will know your ETA.</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <NextLink nextLink={{name: "Habit: A habit forming app", slug: "/habit"}} />
        </div>
      </div>
    );
  }
}
