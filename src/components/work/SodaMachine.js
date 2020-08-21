import React, {Component} from 'react';

import WorkTabLandingInfo from '../util/WorkTabLandingInfo';
import NextLink from '../util/NextLink';

import Storyboard from '../../images/work/soda-machine/storyboard.png';
import SodaMachineCompetitors from '../../images/work/soda-machine/soda-machine-collage.png';
import EarlyPrototypes from '../../images/work/soda-machine/early-prototype.png';
import AccessibilityInspiration from '../../images/work/soda-machine/accessibility-inspirations.png';
import FinalPrototype from '../../images/work/soda-machine/Final-Proto.png';

export default class SodaMachine extends Component {
  componentDidMount() {
    document.title = "Making of Accessible Soda Machine | Chinmay Joshi";
  }

  render() {
    return(
      <div className="work-page-container">
        <WorkTabLandingInfo
          pageHeading="Making of an Accessible Soda Machine"
          classList="bg-pastel-yellow full-bleed"
          pageDescription="A perfect soda machine doesn't exist, yet! Legally blind people cannot access a soda machine. It was an effort to understand needs of the audience and making an accessible soda machine for everyone."
          landingPageImage={FinalPrototype}
          tags={["Accessible Design", "User Research", "UX Design", "Product Design"]}
        />

        <div className="container work-page-presnetation">
          <div id="background" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Background
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <p>
                14 Million people in the U.S. are visually impaired, of these 3 million have a visual impairment that cannot be corrected with glasses or/ contact lenses.
                Fewer than 10% of the 1.3 million legally blind people in the U.S. read Braille.
                The 2012 National Health Interview Survey reported that 20.6 million American Adults 18 and older experienced vision loss.
              </p>
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
                Every MTO soda kiosk has different navigations, user interfaces, physical dimensions, and other various aspects that visually impaired people have difficulty using. Many machines lack ADA compliant features such as providing braille, tactile feedback, audio feedback, and gestural responses to navigate through the interface. As a result, It prohibits people with visual impairments from having a seamless user experience while using an MTO Soda machine.
              </p>
              <p className="font-weight-bold">
                How might we design an MTO soda machine dispenser that is accessible to people with visual impairments to have seamless experience?
              </p>
            </div>
          </div>

          <div id="storyboard" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Storyboard
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <img src={Storyboard} className="img-fluid img-thumbnail" alt="soda machine storyboard" />
            </div>
          </div>

          <div id="competitorAnalysis" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Competitor Analysis
              </h5>
            </div>
            <div className="col-sm-12 col-md-3">
              <img src={SodaMachineCompetitors} className="img-fluid img-thumbnail" alt="soda machine competitors" />
            </div>
            <div className="col-sm-12 col-md-4 pt-2 pl-5">
              <p className="font-weight-bold">Problems -</p>
              <ul>
                <li>No distinct cues between screen and surface.</li>
                <li>Navigating through a flat screen without audio or haptic feedback.</li>
                <li>No option to enable accessibility.</li>
                <li>Height issues for people with mobility impairments</li>
                <li>No accessible AUX input.</li>
              </ul>
            </div>
          </div>

          <div id="userInterviews" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                User Interviews
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <p>We interviewed many people with blindness who have faced issues while vending or making a drink while visiting fast-food chains, cafeteria, etc. These are commonly seen problems in restaurants and cafes -</p>
              <ul>
                <li><b>Findability</b> - A blind person does not know where the machine is situated in the store or restaurant.</li>
                <li><b>Reachability</b> - Once the machine is discovered, the next task is to understand buttons, navigational cues, and enabling accessibility, which is a tremendous task for almost every legally blind person.</li>
                <li><b>Making a drink choice</b> - there are so many options that are hard to select on inaccessible machines.</li>
                <li>Every machine has different dimensions, which makes it even harder to remember past choices.</li>
                <li>A blind person ends up relying on their friends and family to get themselves a drink.</li>
              </ul>
            </div>
          </div>

          <div id="accessibilityStrategies" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Accessible Product Strategies
              </h5>
            </div>
            <div className="col-sm-12 col-md-4">
              <img src={AccessibilityInspiration} className="img-fluid img-thumbnail" alt="accessibility inspirations" />
            </div>
            <div className="col-sm-12 col-md-4">
              <p className="font-weight-bold">Physical Cues for legally blind person -</p>
              <ul>
                <li>Haptic Feedback for performed actions</li>
                <li>Joystick for navigation</li>
                <li>Remote control for selections</li>
                <li>Musical cues and feedbacks</li>
              </ul>
              <span>
                The design rationale behind this is to make the physical characteristics of the freestyle soda machine more defined.
              </span>
            </div>
          </div>

          <div id="earlyPrototypes" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Early Stage Prototpyes
              </h5>
            </div>
            <div className="col-sm-12 col-md-4">
              <img src={EarlyPrototypes} className="img-fluid img-thumbnail" alt="early stage prototypes" />
            </div>
            <div className="col-sm-12 col-md-4">
              <p className="font-weight-bold">Feature list -</p>
              <ul>
                <li>Audio Feedback</li>
                <li>D-Pad for control</li>
                <li>Volume and Accessibility Button</li>
                <li>Aux Input</li>
                <li>Extended Platform to place the cup</li>
                <li>Circular slanted dispenser to fit the cup perfectly</li>
                <li>Touch Screen with border frame</li>
                <li>Scanner to identify cup size at the button of the dispenser. </li>
              </ul>
            </div>
          </div>

          <div id="interactivePrototype" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Interactive Prototype
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <a href="https://www.figma.com/proto/l12E4OBN026f0Ce1pjnzUW/Soda-Machine-Interface?node-id=1%3A2&scaling=min-zoom" target="_blank" rel="noopener noreferrer">
                Prototype Link
                <br />
                <img src={FinalPrototype} className="img-fluid" alt="final soda machine prototpye" />
              </a>
            </div>
          </div>

          <div id="userTesting" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                User Testing
              </h5>
            </div>
            <div className="col-sm-12 col-md-5">
              <p className="font-weight-bold">Interview background -</p>
              <ul>
                <li>Total interviews - 2</li>
                <li>We blindfolded our users to test how the machine would work.</li>
              </ul>

              <p className="font-weight-bold">How we conducted user testing interviews?</p>
              <ul>
                <li>We wanted to test user flows.</li>
                <li>How user is making the decisions?</li>
                <li>How users are interacting with the D-Pad?</li>
                <li>How user would react to the responses he’d receive from the machine?</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-5">
              <p className="font-weight-bold">And, there were the key takeways.</p>
              <ul>
                <li>Users are able to find the buttons and having understanding of D-pad quite easily.</li>
                <li>Users had a bit of problem while going back one step.</li>
                <li>Sometimes we witnessed confusion while pressing ‘UP’ & ‘Right’ arrow key.</li>
                <li>Users responded quite neatly when given a free choice to choose their drink.</li>
                <li>On the last screen where user was supposed to dispense flavors/regular, came as a surprise.</li>
                <li>There’s still room for development and design improvements. But adding a D-pad was a big success. Navigation becomes simple and easy to comprehend.</li>
              </ul>
            </div>
          </div>

          <NextLink nextLink={{name: "Pathways To Housing", slug: "/pathways-to-housing"}} />
        </div>
      </div>
    );
  }
}
