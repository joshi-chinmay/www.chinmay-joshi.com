import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RandomColorPickerDemo from '../../images/work/randomcolorpicker/random-color-picker.gif';
import WorkPageNavigator from '../util/WorkPageNavigator.jsx';

export default class Loading extends Component {
  render() {
    return(
      <div className="main-page-container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <h2>
              Random Color Picker
            </h2>
          </div>
        </div>

        <div className="work-page-container mb-5">
          <div id="vision" className="row work-tab animate-on-hover">
            <div className="col-sm-12 col-md-3 col-lg-2 text-right pr-4 border-right">
              <h1 className="work-title-icon">
                <FontAwesomeIcon icon={["fas", "rocket"]} className="text-muted" />
              </h1>
              <h6 className="work-title">
                Vision
              </h6>
            </div>
            <div className="col-sm-12 col-md-8 pl-5">
              <p>
                <a href="http://randomcolorpicker.xyz/" target="_blank" rel="noopener noreferrer" className="text-capitalize">Random Color Picker</a> is a small project I did years ago to enhance my skills as a UI developer, it turned out to be fun. So I decided to set up a website for it.
              </p>
              <p>
                It's so simple and intuitive to use. All a person needs to do is hit the 'enter' key. There are '+' and '-' signs on the screen to create darker and lighter shades of the current color. You can click on the color to select a custom color.
              </p>
              <p>
                And perform double click to copy the color.
              </p>
            </div>
          </div>

          <div id="glimpse" className="row work-tab animate-on-hover">
            <div className="col-sm-12 col-md-3 col-lg-2 text-right pr-4 border-right">
              <h1 className="work-title-icon">
                <FontAwesomeIcon icon={["fas", "eye"]} className="text-muted" />
              </h1>
              <h6 className="work-title">
                Glimpse
              </h6>
            </div>
            <div className="col-sm-12 col-md-8 pl-5 text-center">
              <img src={RandomColorPickerDemo} className="img-fluid w-50" alt="" />
            </div>
          </div>

          <div id="tech" className="row work-tab animate-on-hover">
            <div className="col-sm-12 col-md-3 col-lg-2 text-right pr-4 border-right">
              <h1 className="work-title-icon">
                <FontAwesomeIcon icon={["fas", "code"]} className="text-muted" />
              </h1>
              <h6 className="work-title">
                Tech
              </h6>
            </div>
            <div className="col-sm-12 col-md-8 pl-5 text-center">
              <h1>
                <FontAwesomeIcon className="mx-4 text-muted" icon={["fab", "html5"]} />
                <FontAwesomeIcon className="mx-4 text-muted" icon={["fab", "js-square"]} />
                <FontAwesomeIcon className="mx-4 text-muted" icon={["fab", "css3-alt"]} />
                <FontAwesomeIcon className="mx-4 text-muted" icon={["fab", "github"]} />
              </h1>
            </div>
          </div>

          <div className="row work-tab">
            <div className="col-sm-12 offset-md-2 col-md-8 pl-5">
              <div className="row text-center mb-5">
                <div className="col-md-6">
                  <a href="/work/step-up" type="button" className="btn btn-warning d-block">
                    Prev: StepUp
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="/work/karishma-joshi-website" type="button" className="btn btn-warning d-block">
                    Next: Karishma's Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-md-none d-lg-block">
          <WorkPageNavigator linkNames={["vision", "glimpse", "tech"]} />
        </div>

        <div className="scroll-overlay">
        </div>
      </div>
    );
  }
}
