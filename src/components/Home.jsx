import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomePageIllustration from '../images/illustrations/CJ-LandingPage.png';

export default class Home extends Component {
  render() {
    return(
      <div className="page-container">
        <div className="align-right">
          <div className="row pl-5">
            <div className="col-sm-12">
              <h1 className="text-primary lead-slg">
                Chinmay Joshi
              </h1>
              <h5 className="lead-lg pt-2 pr-2">
                UX Designer & Frontend Engineer
              </h5>

              <a href="mailto:chinmayj93@gmail.com" className="lead text-lowercase text-warning pr-2">
                <FontAwesomeIcon icon={["far", "envelope"]} />  chinmayj93@gmail.com
              </a>
              <br />
              <a href="tel:+14156761018" className="lead text-warning pr-2">
                <FontAwesomeIcon icon={["fas", "phone-alt"]} />  +1-(415)-676-1018
              </a>
            </div>
          </div>
        </div>

        <div className="home-page-blob">
          <img src={HomePageIllustration} className="img-fluid" alt="home page illustration"></img>
        </div>
      </div>
    );
  }
}
