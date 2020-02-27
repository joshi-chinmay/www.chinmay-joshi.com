import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialMediaIcons from './util/SocialMediaIcons.jsx';
import FeelingAwesome from '../images/illustrations/feeling-awesome.svg';

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
              <h1 className="font-italic">
                "
              </h1>
              <h5 className="font-italic">
                I design memorable, viable, usable and scalable experience by amalgamating principles of user experience design, cognitive psychology and interaction design.
              </h5>
            </div>
          </div>
        </section>

        <section className="home-page-design-process-container">
        </section>

        <section className="home-page-projects-container">
        </section>

        <section className="home-page-footer-container">
        </section>

      </div>
    );
  }
}
