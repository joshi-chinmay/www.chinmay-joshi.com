import React, { Component } from 'react';

import Password from '../util/Password';

import NextLink from '../util/NextLink';
import WorkTabLandingInfo from '../util/WorkTabLandingInfo';
import NextivaImg from '../../images/work/nextiva-automation/automation.png';
import AutomationOld from '../../images/work/nextiva-automation/old-automation.png';
import AutomationIdeation from '../../images/work/nextiva-automation/automation-ideation.png';
import AtbDashboard from '../../images/work/nextiva-automation/atb-dashboard.png';
import Atbtemplates from '../../images/work/nextiva-automation/atb-templates.png';
import AtbEmail from '../../images/work/nextiva-automation/atb-email.png';
import AtbSms from '../../images/work/nextiva-automation/atb-sms.png';
import AtbMarketingContent from '../../images/work/nextiva-automation/atb-content.png';


export default class NextivaTopics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    }

    this.authenticate = this.authenticate.bind(this);
  }

  componentDidMount() {
    document.title = "Nextiva Automations UI | Chinmay Joshi";
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
            pageHeading="Nextiva Automations"
            classList={"bg-pastel-baby-pink full-bleed"}
            pageDescription="Send automated welcome emails, messages, surveys, campaigns, and more to delight customers. Exclusive Quick Automation as a part of CX-Plugin."
            tags={["Product Design", "Usability Study", "Visual Design"]}
            landingPageImage={NextivaImg}
            jumpToProto="#design"
          />
    
          <div className="work-page-presnetation">
            <div id="initial" className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5>My role</h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <p>
                  I was a lead designer responsible for the re-design efforts for the automation builder, along with one designer and UX researcher.
                </p>
                <p>
                  Key highlights:
                </p>
                <ul>
                  <li>Efficiently worked on more than twenty reusable, customizable email & SMS templates.</li>
                  <li>Convinced product owners to prioritize the initiative and engineering resources.</li>
                  <li>Convinced engineering and product owners to improve the to-and-fro navigation between Admin UI and Nextiva App.</li>
                  <li>I worked with the marketing & sales team to focus on the CX-Plugin (Customer Experience Plugin) to increase per-customer revenue.</li>
                </ul>
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
            
            <div id="problem" className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5>Problem</h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <p>
                  Our current automation builder could have been more attractive and usable. Although the name said "Quick automations", very few things about it were quick.
                  The other designer and I performed a heuristic evaluation of things that did not work well for us and devised a game plan.
                  Unintuitive automation templates made it difficult for sales personnel to sell the feature.
                </p>

                <img src={AutomationOld} className="img-fluid mt-4" alt="old automation user interface" />

                <p className="mt-4">
                  All-in-all, this automation builder was not a way to serve more than 30k accounts.
                </p>
              </div>
            </div>

            <div id="research" className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5>Generative research</h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <p>
                  As we planned our course to improve our automation flow builder, we were still determining how to proceed. Our typical customer base is heavily equipped with VoIP technology, using calling and text messaging as their primary communication.
                </p>
                <p>
                  Hence, we decided to involve our research team to build a case study around what small/medium-scale businesses look for to automate.
                  We collaborated on the following research items -
                </p>

                <ul>
                  <li>Who exactly is our user? And how do they use Nextiva?</li>
                  <li>How do Nextiva users interact with their customer base to acquire leads?</li>
                  <li>What does a sale lifecycle look like for these business owners?</li>
                  <li>How can we empower their routine tasks and increase customer satisfaction so they can bring in more business?</li>
                </ul>
              </div>
            </div>

            <div id="discovery" className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5>Discovery</h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <p>
                  UX research and marketing team came up with the following discoveries. These key findings helped the UX design and Product team plan for the next steps. UX research team worked with Nextiva Advisors (a group of individuals using the Nextiva App daily who have agreed to share product feedback).
                </p>

                <ul>
                  <li>Phone calls, SMS, and email are primary communication channels.</li>
                  <li>Small/medium-scale businesses have shared email addresses and phone numbers to reach their audience.</li>
                  <li>Nextiva customers even use shared phone numbers for internal communications.</li>
                  <li>Small-scale businesses do not have a defined sales lifecycle.</li>
                  <li>Medium-scale businesses tend to use third-party CRM solutions and contact management solutions. Some audiences mentioned using tools like Notion and Google Spreadsheet to maintain a customer base.</li>
                  <li>Nextiva users do want quick ways to reach their customer base. Some examples -</li>
                  <ul>
                    <li>Welcome new customers and wish customers on their birthdays and anniversaries</li>
                    <li>Social media advertising, blog sharing, etc.</li>
                    <li>Paid promotions</li >
                    <li>Payment reminders & invoice sharing</li>
                  </ul>
                </ul>
              </div>
            </div>

            <div id="goals" className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5>Identify goals</h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <p>
                  Based on the UX research case study, I facilitated a workshop to brainstorm ideas on areas of improvement and how we can provide solutions to our customer base.
                </p>

                <img src={AutomationIdeation} className="img-fluid mt-4" alt="automation ideation session" />
              </div>
            </div>

            <div id="design" className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5>Design phase</h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <p>
                  Once we finalized our feature list, I started sketching wireframes to get the team’s feedback.
                  I finalized more than 25 user flows to improve the current experience with our engineering partners.
                </p>

                <img src={AtbDashboard} className="img-fluid my-5" alt="automation dashboard" />
                <img src={Atbtemplates} className="img-fluid my-5" alt="automation templates" />
                <img src={AtbEmail} className="img-fluid my-5" alt="automation email builder" />
                <img src={AtbSms} className="img-fluid my-5" alt="automation sms builder" />
              </div>
            </div>

            <div id="content" className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5>Content generation</h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <p>
                  I partnered with our design operations team to collaborate with the marketing & content management team to develop intuitive, user-friendly content for our automation templates.
                  The marketing team also devised strategies to send automated & manual surveys based on SmartTopics.
                </p>

                <img src={AtbMarketingContent} className="img-fluid w-50 my-5" alt="marketing content" />
              </div>
            </div>

            <div id="usability" className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5>Usability & feedback session</h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <p>
                  As we deployed our new feature, it was time to get user feedback. We use a Pendo to receive user feedback from our users.
                  I gathered insights and ensured we were continuously listening to our users and improving our product.
                </p>

                <ul>
                  <li>Most of our user base seemed happy with the new automation templates we offered.</li>
                  <li>Medium-size businesses wanted more functionality, as we expected. They requested to have conditional logic built into automation templates.</li>
                  <li>Some users suggested creating internal tasks & calendar reminders once certain event take place.</li>
                </ul>
              </div>

              <div id="conclusion" className="row work-tab">
                <div className="col-sm-12 col-md-3 col-lg-2">
                  <h5>Conclusion</h5>
                </div>
                <div className="col-sm-12 col-md-10">
                  <p>
                    With our CX-plugin launch, we are just getting started. We already plan to do if/then conditional logic. Advanced task & calendar management. Integration with sales & service module, allowing customers to manage leads & opportunities effectively.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <NextLink nextLink={{ name: "Nextiva: SmartTopics Redesign", slug: "/nextiva-topics" }} />

        </div>
      );
    }
  }
}
