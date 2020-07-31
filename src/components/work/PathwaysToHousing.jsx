import React, {Component} from 'react';

import WorkPageNavigator from '../util/WorkPageNavigator.jsx';
import SupportingOrgs from '../../images/work/pathways-to-housing/supporting-orgs.png';
import journeyMap1 from '../../images/work/pathways-to-housing/user - journey1.jpg';
import journeyMap2 from '../../images/work/pathways-to-housing/user - journey2.jpg';
import oldNavigation from '../../images/work/pathways-to-housing/old-navigation.png';
import newNavigation from '../../images/work/pathways-to-housing/new-navigation.png';
import wireframes from '../../images/work/pathways-to-housing/wireframes.png';

export default class PathwaysToHousing extends Component {
  render() {
    return(
      <div className="main-page-container">
        <div className="work-page-container">

          <div className="row no-gutters">
            <div className="col-sm-12">
              <h1>
                Pathways To Housing
              </h1>
            </div>
            <div className="col-sm-2 heading-separator my-2">
            </div>
          </div>

          <div id="preface" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Preface
              </h5>
            </div>
            <div className="col-sm-12 col-md-7">
              <p>
                This project is part of academic group study. This case study is done to improve information architecture of the existing website.
                The website can be accessed on <a href="http://pathwaystohousingpa.org/" className="text-lowercase" target="_blank" rel="noopener noreferrer">this mentioned URL</a>.
              </p>
            </div>
          </div>

          <div id="background" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Background
              </h5>
            </div>
            <div className="col-sm-12 col-md-7">
              Pathways To housing, Philadelphia -
              <blockquote cite="https://pathwaystohousingpa.org/who-we-are">
                Empowering people with disabilities to improve their housing stability, achieve better health, and reclaim their lives.
              </blockquote>

              <p className="font-weight-bold">They are Providing Homes, Restoring Health, Reclaiming Lives.</p>
            </div>
          </div>

          <div id="partners" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Partners
              </h5>
            </div>
            <div className="col-sm-12 col-md-7">
              <img src={SupportingOrgs} className="img-fluid img-thumbnail" alt="competitors of pathways to housing" />
            </div>
          </div>

          <div id="targetAudience" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Target Audience
              </h5>
            </div>
            <div className="col-sm-12 col-md-7">
              <p>
                Before the website redesign, we wanted to finalize the target audience as it'd impact how we structure our data.
              </p>
              <ul>
                <li>People who can create opportunities.</li>
                <li>People who are willing to donate.</li>
                <li>People who are willing to volunteer.</li>
                <li>People who are willing to build relationships.</li>
                <li>People who are willing to provide medical services.</li>
                <li>People who are willing to provide furniture.</li>
                <li>People with families who are experiencing homelessness.</li>
                <li>People who are in need of furniture or any other household items.</li>
              </ul>
            </div>
          </div>

          <div id="contentAudit" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Content Audit
              </h5>
            </div>
            <div className="col-sm-12 col-md-7">
              We distributed and read content from each and every page and listed down possible textual as well as design improvements which would help us organize content in all possible ways.
              Comprehensive guide can be seen on <a href="https://docs.google.com/spreadsheets/d/1YDhvj-AnHPBgH68inT0qDiaAIaEMb5clazhQbgWB-k0/edit?usp=sharing" className="text-lowercase" target="_blank" rel="noopener noreferrer">this Google Spreadsheet</a>.
            </div>
          </div>

          <div id="issues" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Issues
              </h5>
            </div>
            <div className="col-sm-12 col-md-7">
              <ul>
                <li>Searching -</li>
                <ul>
                  <li>Untidy search results.</li>
                  <li>Irrelevant text & monotonous text.</li>
                </ul>

                <li>Bad navigation -</li>
                <ul>
                  <li>Need to click many links to reach the final page.</li>
                  <li>Person gets lost while navigating between different websites.</li>
                </ul>

                <li>Cluttered & monotonous text -</li>
                <ul>
                  <li>Monotonous text with large fonts makes the relevant information lose.</li>
                  <li>Lack of self-explanatory images and readable text.</li>
                  <li>Every page of the website looks dull and same.</li>
                </ul>

                <li>Accessibility -</li>
                <ul>
                  <li>Inaccessible website would affect the visually impaired person’s experience.</li>
                </ul>
              </ul>
            </div>
          </div>

          <div id="userJourneyMap" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                User Journey Map
              </h5>
            </div>
            <div className="col-sm-12 col-md-7">
              <img src={journeyMap1} className="img-fluid img-thumbnail" alt="user journey map" />
              <img src={journeyMap2} className="img-fluid img-thumbnail mt-2" alt="user journey map" />
            </div>
          </div>

          <div id="usabilityTesting" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Usability Testing
              </h5>
            </div>
            <div className="col-sm-12 col-md-7">
              <p>
                We tested website's navigation system as it's an enty point to reach all the pages. We used <a href="https://www.optimalworkshop.com/" className="text-lowercase" target="_blank" rel="noopener noreferrer">www.optimalworkshop.com</a> for testing our website's navigation system.
                Below are the astonishing results.
              </p>

              <div className="row mt-4">
                <div className="col-md-3">
                  <img src={oldNavigation} className="img-fluid img-thumbnail" alt="old navigation menu" />
                </div>
                <div className="col-md-9">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th>Task</th>
                        <th>Avg. completion Time</th>
                        <th>Success Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>To know more about the organization's vision and services, which place would you go to read more about it?</td>
                        <td>20.31 sec</td>
                        <td>20%</td>
                      </tr>
                      <tr>
                        <td>Let's say you know a homeless person, who is in tremendous need of help. Which place would you go to reach out to the organization?</td>
                        <td>38.23 sec</td>
                        <td>10%</td>
                      </tr>
                      <tr>
                        <td>Let's say you are willing to provide help to Pathways To Housing as a VOLUNTEER, where would you find the necessary information about the volunteering?</td>
                        <td>7.54 sec</td>
                        <td>100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-3">
                  <img src={newNavigation} className="img-fluid img-thumbnail" alt="new navigation menus" />
                </div>
                <div className="col-md-9">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th>Task</th>
                        <th>Avg. completion Time</th>
                        <th>Success Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-success font-weight-bold">
                        <td>To know more about the organization's vision and services, which place would you go to read more about it?</td>
                        <td>17.58 sec</td>
                        <td>90%</td>
                      </tr>
                      <tr className="table-success font-weight-bold">
                        <td>Let's say you know a homeless person, who is in tremendous need of help. Which place would you go to reach out to the organization?</td>
                        <td>28.23 sec</td>
                        <td>70%</td>
                      </tr>
                      <tr className="table-warning">
                        <td>Let's say you are willing to provide help to Pathways To Housing as a VOLUNTEER, where would you find the necessary information about the volunteering?</td>
                        <td>8.54 sec</td>
                        <td>30%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div id="wireframes" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Partners
              </h5>
            </div>
            <div className="col-sm-12 col-md-7 text-center">
              <a href="https://www.figma.com/file/0OdX4nCN5WhDiKzCwO7dor/Pathways-Navigation-Wireframe?node-id=0%3A1" target="_blank" rel="noopener noreferrer" className="text-capitalize">
                <img src={wireframes} className="img-fluid img-thumbnail" alt="competitors of pathways to housing" />
                <br /><br />
                Low Fidelity Wireframes
              </a>
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
          <WorkPageNavigator linkNames={["preface", "background", "partners", "targetAudience", "contentAudit", "issues", "userJourneyMap", "usabilityTesting", "wireframes"]} />
        </div>
      </div>
    );
  }
}
