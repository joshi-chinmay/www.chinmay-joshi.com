import React, {Component} from 'react';

import WorkPageNavigator from '../util/WorkPageNavigator.jsx';

export default class PathwaysToHousing extends Component {
  render() {
    return(
      <div className="main-page-container">
        <div className="work-page-container">

          <div className="row no-gutters">
            <div className="col-sm-12">
              <h1>
                Accessible Soda Machine
              </h1>
            </div>
            <div className="col-sm-2 heading-separator my-2">
            </div>
          </div>

          <div id="vision" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Vision
              </h5>
            </div>
            <div className="col-sm-12 col-md-7">
              <span>
                <a href="http://randomcolorpicker.xyz/" target="_blank" rel="noopener noreferrer" className="text-capitalize">Random Color Picker</a> is a small project I did years ago to enhance my skills as a UI developer, it turned out to be fun. So I decided to set up a website for it.
              </span>
              <span>
                It's so simple and intuitive to use. All a person needs to do is hit the 'enter' key. There are '+' and '-' signs on the screen to create darker and lighter shades of the current color. You can click on the color to select a custom color. And perform double click to copy the color.
              </span>
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
          <WorkPageNavigator linkNames={["vision", "glimpse", "tech"]} />
        </div>
      </div>
    );
  }
}
