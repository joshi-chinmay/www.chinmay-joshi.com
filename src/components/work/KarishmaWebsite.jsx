import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import KarishmaPersonalityMap from '../../images/work/karishma-website/Karishma-Personality.png';
import KarishmaWebsiteGlimpse from '../../images/work/karishma-website/glimpse.png';

import WorkPageNavigator from '../util/WorkPageNavigator.jsx';

export default class KarishmaWebsite extends Component {
  render() {
    return(
      <div className="main-page-container">
        <div className="work-page-container">
          <div className="row no-gutters">
            <div className="col-sm-12">
              <h1>
                Karishma Joshi - Website
              </h1>
            </div>
            <div className="col-sm-2 heading-separator">
            </div>
          </div>

          <div id="vision" className="row work-tab mt-5">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h6>
                Vision
              </h6>
            </div>
            <div className="col-sm-12 col-md-7">
              <span>
                <a href="http://www.karishma-joshi.com" target="_blank" rel="noopener noreferrer" className="text-capitalize">Karishma Joshi</a>, is a friend of mine who asked me to design a website for her as she was preparing herself for internship hunt. She wished to showcase her portfolio online and in a handbook. Hence we kickstarted this project by initiating a discussion about basics of web development and the information I'd need from her.
              </span>
            </div>
          </div>

          <div id="infoAndMindmapping" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h6>
                Mindmapping
              </h6>
            </div>
            <div className="col-sm-12 col-md-7">
              <div className="row">
                <div className="col-md-12">
                  <span>
                    In order to begin the website development, I decided to gather more data about Karishma. I wanted her website to be a reflection of her personality. So my first step was to analyse her likes and dislikes.
                    I asked her to take a small personality test so that I can visualize her likes and dislikes.
                  </span>
                  <div className="col-md-12 mt-4 text-center">
                    <h5>The Consul (ESFJ-A)</h5>
                    <img src={KarishmaPersonalityMap} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="personalityTraits" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h6>
                Personality Traits
              </h6>
            </div>
            <div className="col-sm-12 col-md-7">
              <div className="row">
                <div className="col-md-3 text-center p-2">Designer head</div>
                <div className="col-md-3 text-center p-2">Caricature artist</div>
                <div className="col-md-3 text-center p-2">Doodler</div>
                <div className="col-md-3 text-center p-2">Imaginative and creative</div>
                <div className="col-md-3 text-center p-2">Strong practical skills</div>
                <div className="col-md-3 text-center p-2">Sense of duty & diligence</div>
                <div className="col-md-3 text-center p-2">Logical individual</div>
                <div className="col-md-3 text-center p-2">Sensitive and warm at heart</div>
              </div>
            </div>
          </div>

          <div id="glimpse" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h6>
                Glimpse
              </h6>
            </div>
            <div className="col-sm-12 col-md-8 text-center">
              <img src={KarishmaWebsiteGlimpse} className="img-fluid img-thumbnail w-75" alt="" />
            </div>
          </div>

          <div id="tech" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h6>
                Technology
              </h6>
            </div>
            <div className="col-sm-12 col-md-8 text-center">
              <h1>
                <FontAwesomeIcon className="mx-4 text-muted" icon={["fab", "html5"]} />
                <FontAwesomeIcon className="mx-4 text-muted" icon={["fab", "react"]} />
                <FontAwesomeIcon className="mx-4 text-muted" icon={["fab", "js-square"]} />
                <FontAwesomeIcon className="mx-4 text-muted" icon={["fab", "css3-alt"]} />
                <FontAwesomeIcon className="mx-4 text-muted" icon={["fab", "bootstrap"]} />
                <FontAwesomeIcon className="mx-4 text-muted" icon={["fab", "github"]} />
              </h1>
            </div>
          </div>

          <div className="row work-tab">
            <div className="col-sm-12 offset-md-2 col-md-7">
              <div className="row text-center mb-5">
                <div className="col-md-6">
                  <a href="/work/randomcolorpicker" type="button" className="btn btn-warning d-block">
                    Prev: Random Color Picker
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="/work/tilt" type="button" className="btn btn-warning d-block">
                    Next: TILT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="d-md-none d-lg-block">
        <WorkPageNavigator linkNames={["vision", "infoAndMindmapping", "personalityTraits", "glimpse", "tech"]} />
      </div>

      <div className="scroll-overlay">
      </div>
    </div>
    );
  }
}
