import React, {Component} from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import NextLink from '../util/NextLink.jsx';

import TILTMobilePc from "../../images/gallery/TILT-mobile-pc.png";
import UserAnalysis1 from "../../images/work/TILT/UserAnalysis/1.png";
import UserAnalysis2 from "../../images/work/TILT/UserAnalysis/2.png";
import UserAnalysis3 from "../../images/work/TILT/UserAnalysis/3.png";
import UserAnalysis4 from "../../images/work/TILT/UserAnalysis/4.png";
import UserAnalysis5 from "../../images/work/TILT/UserAnalysis/5.png";
import UserAnalysis6 from "../../images/work/TILT/UserAnalysis/6.png";
import UserAnalysis7 from "../../images/work/TILT/UserAnalysis/7.png";

import wireframe1 from "../../images/work/TILT/Wireframes/1.png";
import wireframe2 from "../../images/work/TILT/Wireframes/2.png";
import wireframe3 from "../../images/work/TILT/Wireframes/3.png";
import wireframe4 from "../../images/work/TILT/Wireframes/4.png";
import wireframe5 from "../../images/work/TILT/Wireframes/5.png";
import wireframe6 from "../../images/work/TILT/Wireframes/6.png";

import colorPalette from "../../images/work/TILT/color-palette.png";
import RobotoFont from "../../images/work/TILT/Robot.png";

export default class Tilt extends Component {
  componentDidMount() {
    document.title = "TILT - Today I Listened To | Chinmay Joshi";
  }

  render() {
    return(
      <div className="work-page-container">
        <div className="row work-landing-page">
          <div className="col-sm-12 col-md-5">
            <div className="work-tab-landing-page-title">
              <h1 className="mb-2">TILT - Today I Listened To</h1>
              <p className="mt-5">
                A music platform for evertyone to share music.
                <br />Solution tailored for Jefferson University's students.
              </p>

              <span className="d-block mt-2">
                Mobile & Web App | Prototyping | Product Testing
              </span>
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <img src={TILTMobilePc} className="img-fluid" />
          </div>
        </div>

        <div className="container work-page-presnetation">
          <div id="vision" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Vision
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <span>
                The vision behind this idea is to have a platform where a user can create a list of songs he listens to every day. We believe there is an emotion associated with every song. The platform will help the user to add new songs and create playlists, where he can openly or privately talk about his feelings associated with a piece of music.
              </span>
            </div>
          </div>

          <div id="research" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                User Research
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <span>
                With the help of Google Forms and actual interviews, I came up with user study. This study is very primary, and user personas were not part of the survey. I was hoping to understand what type of music people listen to, and why.
              </span>
              <div className="bg-white-images mt-5">
                <Carousel showStatus={false} showIndicators={false} useKeyboardArrows={true} autoPlay interval={5000} infiniteLoop>
                  <div>
                    <img src={UserAnalysis1} alt="User Analysis statestics" className="w-75" />
                  </div>
                  <div>
                    <img src={UserAnalysis2} alt="User Analysis statestics" className="w-50" />
                  </div>
                  <div>
                    <img src={UserAnalysis3} alt="User Analysis statestics" className="w-50" />
                  </div>
                  <div>
                    <img src={UserAnalysis4} alt="User Analysis statestics" className="w-50" />
                  </div>
                  <div>
                    <img src={UserAnalysis5} alt="User Analysis statestics" className="w-75" />
                  </div>
                  <div>
                    <img src={UserAnalysis6} alt="User Analysis statestics" className="w-75" />
                  </div>
                  <div>
                    <img src={UserAnalysis7} alt="User Analysis statestics" className="w-75" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>

          <div id="wireframes" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Wireframes
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <div className="bg-white-images">
                <Carousel showStatus={false} showIndicators={false} useKeyboardArrows={true} autoPlay interval={3000} infiniteLoop>
                  <div>
                    <img src={wireframe1} alt="Carousel slide for wireframe" className="w-50" />
                  </div>
                  <div>
                    <img src={wireframe2} alt="Carousel slide for wireframe" className="w-50" />
                  </div>
                  <div>
                    <img src={wireframe3} alt="Carousel slide for wireframe" className="w-25" />
                  </div>
                  <div>
                    <img src={wireframe4} alt="Carousel slide for wireframe" className="w-25" />
                  </div>
                  <div>
                    <img src={wireframe5} alt="Carousel slide for wireframe" className="w-25" />
                  </div>
                  <div>
                    <img src={wireframe6} alt="Carousel slide for wireframe" className="w-50" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>

          <div id="colorPalette" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Color Palette
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <span>
                After moodboarding and considering different aspects of the applicationn, I chose a blue-themed color palette for the applicationn. The idea was to make it look refreshing and soothing to the eyes.
                People should be able to use it for a long period of time.
                <br />
                “Gray” scale for accent color and “red” for errors and warnings. Rest of the applicationn will be in shades of blue and white.
              </span>

              <div className="mt-5">
                <img src={colorPalette} className="img-fluid img-thumbnail" alt="Color Palette" />
              </div>
            </div>
          </div>

          <div id="fontFamily" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Font Family
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <span>
                The applicationn has a clear vision. It is about people wanting to share their feelings associated with a song or an album. Hence, I wanted a font family which is commonly used and easily readable to everyone. Googles Roboto is the answer to it.
                <br />
                Roboto is a mechanical looking geometric font, which creates a clean and readable pattern on the page.
              </span>

              <div className="mt-5">
                <img src={RobotoFont} className="img-fluid img-thumbnail" alt="Roboto Font Selection" />
              </div>
            </div>
          </div>

          <div id="concept" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Concept Design
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <img src={TILTMobilePc} className="img-fluid" alt="TILT application conceptulization" />
            </div>
          </div>

          <NextLink nextLink={{name: "Website of a Landscape Designer", slug: "/karishma-joshi-website"}} />
        </div>
      </div>
    );
  }
}
