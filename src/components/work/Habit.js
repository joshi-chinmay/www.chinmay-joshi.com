import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SlideIn from '../../layouts/slide-in';
import WorkTabLandingInfo from '../util/WorkTabLandingInfo';
import NextLink from '../util/NextLink';

import HabitMockup from '../../images/work/habit/Artboard.png';
import AppForest from '../../images/work/habit/apps/app1-forest.png';
import AppStreak from '../../images/work/habit/apps/app2-streak.png';
import AppSmokefree from '../../images/work/habit/apps/app3-smokefree.png';
import AppGoogleFit from '../../images/work/habit/apps/app4-googlefit.png';

export default class Habit extends Component {
  componentDidMount() {
    document.title = "Habit - A Habit forming app | Chinmay Joshi";
  }

  render() {
    return(
      <div className="work-page-container">
        <WorkTabLandingInfo
          pageHeading="Habit - A Habit Forming App"
          classList="bg-pastel-sky-blue full-bleed"
          pageDescription="A playful experience and a community oriented app that helps you form long-lasting habits. Solution tailored for Jefferson University's students."
          landingPageImage={HabitMockup}
          tags={["User Research", "Product Design", "Visual Design", "Rapid Prototyping"]}
        />

        <SlideIn>
          <div className="container work-page-presnetation">

            <div className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5 className="font-family-playfair">
                  Vision
                </h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <p>
                  The vision is to create mental, physical and digital well-being and help people form lasting habits. It is very much necessary to have hobbies, passions and community presence for a person, which would take care of their well-being. Hence, this is an initial step taken by Habit in order to form habits.
                </p>
              </div>
            </div>

            <div className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5 className="font-family-playfair">
                  Problem Space
                </h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <p>People struggle through -</p>
                <ul>
                  <li>Unable to keep up with the routine.</li>
                  <li>Monitoring stats all by yourself.</li>
                  <li>Lack of communities and support from likeminds.</li>
                  <li>Lack of mentorship and guidance.</li>
                  <li>Lack of stats, challenges and gamification features.</li>
                  <li>Lack of user engagement and making product addictive in a positive way.</li>
                  <li>Unable to understand the problem coming in way of forming habits.</li>
                </ul>
              </div>
            </div>

            <div className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5 className="font-family-playfair">
                  Competitor Analysis
                </h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td>
                          <img src={AppForest} alt="competitor applications" className="img-fluid img-thumbnail img-circular h-25" />
                        </td>
                        <td>
                          <img src={AppStreak} alt="competitor applications" className="img-fluid img-thumbnail img-circular h-25" />
                        </td>
                        <td>
                          <img src={AppSmokefree} alt="competitor applications" className="img-fluid img-thumbnail img-circular h-25" />
                        </td>
                        <td>
                          <img src={AppGoogleFit} alt="competitor applications" className="img-fluid img-thumbnail img-circular h-25" />
                        </td>
                      </tr>
                      <tr>
                        <td><b>Forest</b> applicationn helps with digital-wellbeing of the user. By keeping phone away user grows a forest of his own.</td>
                        <td><b>Streaks</b> is the to-do list that helps you form good habits. Every day you complete a task, your streak is extended.</td>
                        <td><b>Smoke Free</b> is UK's most popular smoking cessation app with unique features and a great user experience.</td>
                        <td><b>Google Fit</b> is a activity tracking app for everyday fitness activities such as workouts, runs, routes, and different counts.</td>
                      </tr>
                      <tr>
                        <td>
                          <FontAwesomeIcon icon={["fab", "android"]} className="mr-2" />
                          <FontAwesomeIcon icon={["fab", "app-store-ios"]} className="mr-2" />
                        </td>
                        <td>
                          <FontAwesomeIcon icon={["fab", "android"]} className="mr-2" />
                          <FontAwesomeIcon icon={["fab", "app-store-ios"]} className="mr-2" />
                        </td>
                        <td>
                          <FontAwesomeIcon icon={["fab", "android"]} className="mr-2" />
                          <FontAwesomeIcon icon={["fab", "app-store-ios"]} className="mr-2" />
                        </td>
                        <td>
                          <FontAwesomeIcon icon={["fab", "android"]} className="mr-2" />
                          <FontAwesomeIcon icon={["fab", "app-store-ios"]} className="mr-2" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5 className="font-family-playfair">
                  Customer Segment
                </h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <p>
                  This applicationn targets a <b>Broad Spectrum</b> of the market, with a <b>Multi-sided platform</b> for users and mentors on IOS, Android platform, along with web based platform.
                </p>
                <ul>
                  <li>People who are willing to form habits.</li>
                  <li>Millennials & young audience.</li>
                  <li>People who think they need to a change.</li>
                  <li>People who are able to help others forming habits and well-being.</li>
                </ul>
              </div>
            </div>

            <div className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5 className="font-family-playfair">
                  Feature List
                </h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td className="lead-lg text-success"><FontAwesomeIcon icon={["fas", "server"]} /></td>
                        <td className="lead-lg text-success"><FontAwesomeIcon icon={["fas", "chess-knight"]} /></td>
                        <td className="lead-lg text-success"><FontAwesomeIcon icon={["fas", "users"]} /></td>
                        <td className="lead-lg text-success"><FontAwesomeIcon icon={["fas", "chalkboard-teacher"]} /></td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Activity Tracking</td>
                        <td className="font-weight-bold">Gamification</td>
                        <td className="font-weight-bold">Communities</td>
                        <td className="font-weight-bold">Mentorship</td>
                      </tr>
                      <tr>
                        <td className="small">
                          App would track user's activity such as applicationn usage, location, etc. <b>All the data stays on his device in a secured manner, so no shady business.</b> Based on the usage, the applicationn would help him carve out free time and posts reminders via notifications.
                        </td>
                        <td className="small">
                          We believe, if anyone wants to form a habit, <b>he needs to do the activity at least 21 days.</b> Hence, we would push our users to do the activity everyday. Consecutive activity creates a streak, and user's can compete against your social media connections.
                        </td>
                        <td className="small">
                          We believe in bringing communities and people together. <b>Likeminds can create and be part of communities, share their words of wisdom.</b> People around the globe can form habits together.
                          When many people work on things together they get faster results.
                        </td>
                        <td className="small">
                          When a person is achieving a goal, it is best to have mentorship or an expert along with the journey.
                          <b>This is a paid feature of our product. Cost is very low, and the company pays 10% amount of one mentee’s subscription to the mentor.</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5 className="font-family-playfair">
                  Design link to Figma
                </h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <a href="https://www.figma.com/proto/xTFa6T5Txczw2Hy9AytN3z/Habit?node-id=42%3A0&scaling=scale-down" target="_blank" rel="noopener noreferrer" className="text-capitalize">
                  <img src={HabitMockup} className="img-fluid" alt="TILT application conceptulization" />
                </a>
              </div>
            </div>

            <NextLink nextLink={{name: "Thesis - Public Transit Safety", slug: "/public-transit-safety"}} />
          </div>
        </SlideIn>
      </div>
    );
  }
}
