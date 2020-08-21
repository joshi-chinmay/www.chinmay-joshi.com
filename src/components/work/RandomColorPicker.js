import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import WorkTabLandingInfo from '../util/WorkTabLandingInfo';
import NextLink from '../util/NextLink';

import Artboard from '../../images/illustrations/colors.svg';
import RandomColorPickerDemo from '../../images/work/randomcolorpicker/random-color-picker.gif';

export default class RandomColorPicker extends Component {
  componentDidMount() {
    document.title = "Random Color Picker | Chinmay Joshi";
  }

  render() {
    return(
      <div className="work-page-container">
        <WorkTabLandingInfo
          pageHeading="Random Color Picker"
          pageDescription="What if you could create random colors on the go. Believe me, it's fun! Why don’t you check it out?"
          landingPageImage={Artboard}
          landingPageImageWidth="w-75"
          tags={["Visual Design", "Website Design"]}
        />

        <div className="container work-page-presnetation">
          <div id="vision" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Vision
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <span>
                <a href="http://randomcolorpicker.xyz/" target="_blank" rel="noopener noreferrer" className="text-capitalize">Random Color Picker</a> is a small project I did years ago to enhance my skills as a UI developer, it turned out to be fun. So I decided to set up a website for it.
              </span>
              <span>
                It's so simple and intuitive to use. All a person needs to do is hit the 'enter' key. There are '+' and '-' signs on the screen to create darker and lighter shades of the current color. You can click on the color to select a custom color. And perform double click to copy the color.
              </span>
            </div>
          </div>

          <div id="glimpse" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Glimpse
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <img src={RandomColorPickerDemo} className="img-fluid" alt="gif of random color picker" />
            </div>
          </div>

          <div id="tech" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Technology Stack
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <h1>
                <FontAwesomeIcon className="mx-4" icon={["fab", "html5"]} />
                <FontAwesomeIcon className="mx-4" icon={["fab", "js-square"]} />
                <FontAwesomeIcon className="mx-4" icon={["fab", "css3-alt"]} />
                <FontAwesomeIcon className="mx-4" icon={["fab", "github"]} />
              </h1>
            </div>
          </div>

          <NextLink nextLink={{name: "Thesis - Public Transit Safety", slug: "/public-transit-safety"}} />
        </div>
      </div>
    );
  }
}
