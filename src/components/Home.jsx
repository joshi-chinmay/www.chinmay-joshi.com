import React, {Component} from 'react';
import CjNoBg from '../images/CJ-no-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Home extends Component {
  render() {
    return(
      <div className="main-page-container">
        <div className="row pt-5 text-center">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1 className="lead-lg">Chinmay Joshi</h1>
            <h5>Frontend Software Engineer | UX Designer</h5>
          </div>
        </div>

        <div className="row mt-5">

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 text-center">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <img src={CjNoBg} className="img-thumbnail" alt="profile-picture" />
              </div>

              <div className="col-sm-12 col-md-12 mt-4">
                <h6 className="lead-sm">Email</h6>
                <a href="mailto:chinmayj93@gmail.com">chinmayj93@gmail.com</a>
              </div>

              <div className="col-sm-12 col-md-12 mt-4">
                <h6 className="lead-sm">Phone</h6>
                <a href="tel:+14156761018">+1-(415)-676-1018</a>
              </div>

              <div className="col-sm-12 col-md-12 mt-4">
                <h6 className="lead-sm">Find me on</h6>
                <a className="social-media-icon" href="https://github.com/joshi-chinmay">
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
                <a className="social-media-icon" href="https://dev.to/joshichinmay">
                  <FontAwesomeIcon icon={["fab", "dev"]} />
                </a>
                <a className="social-media-icon" href="https://twitter.com/chinmay_joshi_">
                  <FontAwesomeIcon icon={["fab", "twitter-square"]} />
                </a>
                <a className="social-media-icon" href="https://www.linkedin.com/in/chinmay-joshi-65292598/">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
                <a className="social-media-icon" href="https://www.instagram.com/chinmayjoshi/">
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
                <a className="social-media-icon" href="https://medium.com/@chinmayjoshi">
                  <FontAwesomeIcon icon={["fab", "medium"]} />
                </a>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-5">
            <div className="row">
              <div className="col-md-12">
                <h5 className="font-weight-bolder lead">
                  Hello there,
                </h5>

                <p>
                  I am a Software Engineer from India 🇮🇳, currently living in philadelphia, USA 🇺🇸. I am pursuing MS in User Experience and Interaction Design 🎓 from Thomas Jefferson University (expected graduation Dec 2020).
                </p>
                <p>
                  I am an INFJ 🤓, perfectionist 💯, technology enthusiast 👨‍💻, keen learner 📚, and music enthisiast 🎵. I design products for humankind, which are easy to use, consisting emotion, and helping with everyday tasks.
                </p>
              </div>
            </div>

            <div className="row mt-5 mb-5">
              <div className="col-md-12">
                <h5 className="font-weight-bolder lead">
                  Let's check out my work!
                </h5>
              </div>

              <div className="col-md-12">
                <a href="/work" className="h6">
                  Work
                  </a>&nbsp;|&nbsp;
                <a href="/about" className="h6">
                  About
                </a>&nbsp;|&nbsp;
                <a href="https://dev.to/joshichinmay" className="h6">
                  Blog
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
