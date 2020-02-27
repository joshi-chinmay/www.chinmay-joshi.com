import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialMediaIcons from './util/SocialMediaIcons.jsx';

import FeelingAwesome from '../images/illustrations/feeling-awesome.svg';
import StepUPMockup from '../images/gallery/stepup-iphone.png';
import TILTMobilePc from '../images/gallery/TILT-mobile-pc.png';
import WireframePic from '../images/illustrations/wireframe.svg';

export default class Home extends Component {
  render() {
    return(
      <div className="page-container">
        <section className="home-page-blob-container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-primary lead-slg">
                Chinmay Joshi
              </h1>
              <h5 className="lead-lg pt-2 pr-2">
                UX Designer & Frontend Engineer
              </h5>

              <div className="mt-3">
                <a href="mailto:chinmayj93@gmail.com" className="lead text-lowercase text-warning pr-2">
                  <FontAwesomeIcon icon={["far", "envelope"]} />  chinmayj93@gmail.com
                </a>
                <br />
                <a href="tel:+14156761018" className="lead text-warning pr-2">
                  <FontAwesomeIcon icon={["fas", "phone-alt"]} />  +1-(415)-676-1018
                </a>
              </div>

              <div className="mt-5">
                <SocialMediaIcons />
              </div>
            </div>
          </div>
        </section>

        <section className="home-page-what-i-do-container">
          <div className="row bg-primary-grad inner-container">
            <div className="col-lg-5 text-right">
              <img src={FeelingAwesome} className="img-fluid w-50" />
            </div>
            <div className="offset-lg-1 col-lg-5 text-center my-auto">
              <h5 className="font-italic">
                I design memorable, viable, usable and scalable experience by amalgamating principles of user experience design, cognitive psychology and interaction design.
              </h5>
            </div>
          </div>
        </section>

        <section className="home-page-projects-container">
          <div className="row bg-primary-grad inner-container">
            <div className="offset-lg-1 col-lg-5 text-center my-auto">
              <h5 className="font-italic text-secondary">
                StepUp is a mobile application, focused on Jefferson University students and staff to help them maintain a healthy lifestyle by taking extra steps in a day.
              </h5>

              <div className="mt-5">
                <a href="/work/step-up" className="font-weight-bold font-italic">
                  VIEW PROJECT
                </a>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <img src={StepUPMockup} className="img-fluid w-40" />
            </div>
          </div>

          <div className="row bg-tilt-primary-grad inner-container">
            <div className="col-lg-6 text-right">
              <img src={TILTMobilePc} className="img-fluid" />
            </div>
            <div className="offset-lg-1 col-lg-4 text-center my-auto">
              <h5 className="font-italic text-primary">
                The vision behind this idea is to have a platform where a user can create a list of songs and share his associated emotions.
              </h5>

              <div className="mt-5">
                <a href="/work/tilt" className="font-weight-bold font-italic">
                  VIEW PROJECT
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="home-page-footer-container">
          <div className="row bg-primary-grad inner-container">
            <div className="offset-lg-3 col-lg-6 text-center">
              <h5 className="font-italic text-secondary">
                Get to know more about my UX designing processes and work experience.
              </h5>
              <div className="mt-5">
                <a href="/work/" className="font-weight-bold font-italic">
                  WORK PAGE
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}
