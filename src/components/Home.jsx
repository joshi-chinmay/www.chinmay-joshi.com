import React, {Component} from 'react';

import SocialMediaIcons from './util/SocialMediaIcons.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Home extends Component {
  render() {
    return(
      <div className="page-layout">
        <div className="layout-50">
          <div className="row h-100">
            <div className="col-sm-12 my-auto px-5">
              <h1 className="text-primary lead-lg pb-2">
                Chinmay Joshi
              </h1>
              <h5 className="lead pt-2">
                UI-UX Designer & Frontend Engineer
              </h5>

              <a href="mailto:chinmayj93@gmail.com" className="text-lowercase text-warning">
                <FontAwesomeIcon icon={["far", "envelope"]} />  chinmayj93@gmail.com
              </a>
              <br />
              <a href="tel:+14156761018" className="text-warning">
                <FontAwesomeIcon icon={["fas", "phone-alt"]} />  +1-(415)-676-1018
              </a>
            </div>
          </div>
        </div>

        <div className="layout-50 bg-primary-grad">
          <div className="row h-100">
            <div className="col-sm-12 my-auto px-5 text-wrap">
              <p className="text-white pb-2 px-4">
                I am a UI-UX Designer and Frontend Engineer, currently living in philadelphia, USA. I am pursuing MS in User Experience and Interaction Design from Thomas Jefferson University.
              </p>
              <p className="text-white pt-2 px-4">
                I am an INFJ, perfectionist, technology geek, keen learner, and music enthusiast. I design products for humankind, which are easy to use, striking an emotional connection, and integral in everyday tasks.
              </p>

              <p className="text-white pt-2 px-4">
                Let's check what I have <a href="/work" className="text-warning text-lowercase font-weight-normal">worked on.</a>
              </p>
            </div>

            <div className="social-media-icons-container text-center">
              <SocialMediaIcons />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
