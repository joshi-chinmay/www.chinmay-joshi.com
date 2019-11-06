import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RandomColorPickerDemo from '../../images/work/randomcolorpicker/random-color-picker.gif';

export default class Loading extends Component {
  render() {
    return(
      <div className="row">
        <div className="col-md-12">

          <div className="row mt-5">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <h1 className="lead-lg">
                <a href="http://randomcolorpicker.xyz/" target="_blank">
                  Random Color Picker
                </a>
              </h1>
            </div>
          </div>

          <div className="work-page-container">
            <div className="row">
              <div className="col-sm-12 offset-md-2 offset-lg-2 col-md-8 col-lg-8">
                <div id="vision" className="card">
                  <div className="card-header">
                    Vision
                  </div>
                  <div className="card-body">
                    <p>
                      <a href="http://randomcolorpicker.xyz/" target="_blank">RandomColorPicker</a> is a small project I did years ago to enhance my skills as UI developer, it turned out to be a fun. So I decided set up a website for it.
                    </p>
                    <p>
                      It's so simple and intuitive to use. All a person needs to do is hit 'enter' key. There are '+' and '-' signs on the screen to create darker and lighter shades of the current color. You can click on the color to select a custom color.
                    </p>
                    <p>
                      And hit double click to copy the color.
                    </p>
                  </div>
                </div>

                <div id="glimpse" className="card mt-5">
                  <div className="card-header">
                    Glimpse of RandomColorPicker
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <img src={RandomColorPickerDemo} className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>

                <div id="tech" className="card mt-5 mb-5">
                  <div className="card-header">
                    Tech
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <h1>
                          <FontAwesomeIcon className="mx-2 text-disabled" icon={["fab", "html5"]} />
                          <FontAwesomeIcon className="mx-2 text-disabled" icon={["fab", "js-square"]} />
                          <FontAwesomeIcon className="mx-2 text-disabled" icon={["fab", "css3-alt"]} />
                          <FontAwesomeIcon className="mx-2 text-disabled" icon={["fab", "bootstrap"]} />
                          <FontAwesomeIcon className="mx-2 text-disabled" icon={["fab", "github"]} />
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 d-sm-none d-md-block col-md-2 col-lg-2">
                <div className="floating-menu">
                  <div className="menu-item">
                    <a href="#vision" className="menu-item-link">
                      Vision
                    </a>
                  </div>
                  <div className="menu-item">
                    <a href="#glimpse" className="menu-item-link">
                      Glimpse
                    </a>
                  </div>
                  <div className="menu-item">
                    <a href="#tech" className="menu-item-link">
                      Tech
                    </a>
                  </div>
                  <div className="menu-item mt-4">
                    <a href="/work" className="menu-item-link">
                      <FontAwesomeIcon icon={["fas", "chevron-left"]} />&nbsp;Go Back
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
