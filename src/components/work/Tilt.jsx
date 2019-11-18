import React, {Component} from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import UserAnalysis1 from "../../images/work/TILT/User Analysis/1.png";
import UserAnalysis2 from "../../images/work/TILT/User Analysis/2.png";
import UserAnalysis3 from "../../images/work/TILT/User Analysis/3.png";
import UserAnalysis4 from "../../images/work/TILT/User Analysis/4.png";
import UserAnalysis5 from "../../images/work/TILT/User Analysis/5.png";
import UserAnalysis6 from "../../images/work/TILT/User Analysis/6.png";
import UserAnalysis7 from "../../images/work/TILT/User Analysis/7.png";

import wireframe1 from "../../images/work/TILT/Wireframes/1.png";
import wireframe2 from "../../images/work/TILT/Wireframes/2.png";
import wireframe3 from "../../images/work/TILT/Wireframes/3.png";
import wireframe4 from "../../images/work/TILT/Wireframes/4.png";
import wireframe5 from "../../images/work/TILT/Wireframes/5.png";
import wireframe6 from "../../images/work/TILT/Wireframes/6.png";

import colorPalette from "../../images/work/TILT/color-palette.png";
import RobotoFont from "../../images/work/TILT/Robot.png";

export default class Tilt extends Component {
  render() {
    return(
      <div className="row">
        <div className="col-md-12">

          <div className="row mt-5">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <h1 className="lead-lg">
                TILT - Today I Listened To
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
                    <p className="text-justify">
                      The vision behind this idea is to have a platform where a user can create a list of songs he listens to every day. We believe there is an emotion associated with every song. The platform will help the user to add new songs and create playlists, where he can openly or privately talk about his feelings associated with a piece of music.
                    </p>
                  </div>
                </div>

                <div id="userResearch" className="card mt-5">
                  <div className="card-header">
                    User Research
                  </div>
                  <div className="card-body">
                    <p>
                      With the help of Google Forms and actual interviews, I came up with user study. This study is very primary, and user personas were not part of the survey. I was hoping to understand what type of music people listen to, and why.
                    </p>
                    <div className="bg-white-images">
                      <Carousel showIndicators={false} showThumbs={false} useKeyboardArrows={true}>
                        <div>
                          <img src={UserAnalysis1} alt="" className="w-75" />
                        </div>
                        <div>
                          <img src={UserAnalysis2} alt="" className="w-75" />
                        </div>
                        <div>
                          <img src={UserAnalysis3} alt="" className="w-75" />
                        </div>
                        <div>
                          <img src={UserAnalysis4} alt="" className="w-75" />
                        </div>
                        <div>
                          <img src={UserAnalysis5} alt="" className="w-75" />
                        </div>
                        <div>
                          <img src={UserAnalysis6} alt="" className="w-75" />
                        </div>
                        <div>
                          <img src={UserAnalysis7} alt="" className="w-75" />
                        </div>
                      </Carousel>
                    </div>
                  </div>
                </div>

                <div id="featureList" className="card mt-5">
                  <div className="card-header">
                    Feature List
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>
                        The platform is aimed to provide the functionality of creating songs and personalized playlists (publicly or privately).
                      </li>
                      <li>
                        That will allow the user to add his/her comments and associated feelings to the piece of music or a playlist.
                      </li>
                      <li>
                        In addition to that, the user will have control over his/her content. He/she can share the particular song or the whole playlist with another user/s. Or he/she can publish his content publicly.
                      </li>
                      <li>
                        If the content is posted publicly by the user, then anyone can view or comment on the song/playlist.
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="wireframing" className="card mt-5">
                  <div className="card-header">
                    Wireframes
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="bg-white-images">
                          <Carousel showIndicators={false} showThumbs={false} useKeyboardArrows={true}>
                            <div>
                              <img src={wireframe1} alt="" className="w-75" />
                            </div>
                            <div>
                              <img src={wireframe2} alt="" className="w-75" />
                            </div>
                            <div>
                              <img src={wireframe3} alt="" className="w-25" />
                            </div>
                            <div>
                              <img src={wireframe4} alt="" className="w-25" />
                            </div>
                            <div>
                              <img src={wireframe5} alt="" className="w-25" />
                            </div>
                            <div>
                              <img src={wireframe6} alt="" className="w-75" />
                            </div>
                          </Carousel>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="colorPalette" className="card mt-5">
                  <div className="card-header">
                    Color Palette
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <p>
                          After moodboarding and considering different aspects of the application, I decided to follow blue-themed color palette for the application.
                          I want my application to look refreshing and soothing to the eyes. People should be able to use it for long period of time.
                        </p>
                        <p>
                          Gray scale for accent color and red color for errors and warnings. Rest of the application will be the shades of blue and white.
                        </p>
                      </div>
                      <div className="col-md-12 text-center">
                        <img src={colorPalette} className="img-fluid w-50" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div id="typographyRoboto" className="card mt-5 mb-5">
                  <div className="card-header">
                    Font Family
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <p>
                          My application's vision is clear. It is about people wanting to share their feelings associated with the song or the album.
                          Hence, I wanted a font family which is commonly used and easily readable to everyone. And to that Google's Roboto is the answer.
                        </p>
                        <p>
                          Roboto is a mechanical looking font, and largly geometric, which creates a clean and readable pattern on the page.
                        </p>
                      </div>
                      <div className="col-md-12 text-center">
                        <img src={RobotoFont} className="img-fluid w-50" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-2 col-lg-2">
                <div className="floating-menu">
                  <div className="list-item">
                    <a href="#vision" className="menu-item-link">
                      Vision
                    </a>
                  </div>
                  <div className="list-item">
                    <a href="#userResearch" className="menu-item-link">
                      User Research
                    </a>
                  </div>
                  <div className="list-item">
                    <a href="#featureList" className="menu-item-link">
                      Feature List
                    </a>
                  </div>
                  <div className="list-item">
                    <a href="#wireframing" className="menu-item-link">
                      Wireframing
                    </a>
                  </div>
                  <div className="list-item">
                    <a href="#colorPalette" className="menu-item-link">
                      Color Palette
                    </a>
                  </div>
                  <div className="list-item">
                    <a href="#typographyRoboto" className="menu-item-link">
                      Font Family
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
