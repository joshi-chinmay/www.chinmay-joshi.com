import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NextLink from '../util/NextLink.jsx';

import KarishmaPersonalityMap from '../../images/work/karishma-website/Karishma-Personality.png';
import KarishmaWebsiteGlimpse from '../../images/work/karishma-website/glimpse.png';

export default class KarishmaWebsite extends Component {
  componentDidMount() {
    document.title = "Website of a Landscape Designer | Chinmay Joshi";
  }

  render() {
    return(
      <div className="work-page-container">
        <div className="row work-landing-page">
          <div className="col-sm-12 col-md-5">
            <div className="work-tab-landing-page-title">
              <h1 className="mb-2">Website of a Landscape Designer</h1>
              <p className="mt-5">
                <a href="http://www.karishma-joshi.com" target="_blank" rel="noopener noreferrer" className="text-capitalize">A showcase</a> of work for my Architect friend and more than that my first ever web design as a UX Designer!
              </p>

              <span className="d-block mt-2">
                User Inerview | Affinity Mapping | Visual Design | Website Design
              </span>
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <img src={KarishmaWebsiteGlimpse} className="img-fluid" alt="Karishma Joshi Website" />
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
                <a href="http://www.karishma-joshi.com" target="_blank" rel="noopener noreferrer" className="text-capitalize">Karishma Joshi</a>, is a friend of mine who asked me to design a website for her as she was preparing herself for internship hunt. She wished to showcase her portfolio online and in a handbook. Hence we kickstarted this project by initiating a discussion about basics of web development and the information I would need from her.
              </span>
            </div>
          </div>

          <div id="infoAndMindmapping" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Mindmapping
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <div className="row">
                <div className="col-md-12">
                  <span>
                    In order to begin the website development, I decided to gather more data about Karishma. I wanted her website to be a reflection of her personality. So my first step was to analyse her likes and dislikes.
                    I asked her to take a small personality test so that I can visualize her likes and dislikes.
                  </span>
                  <div className="col-md-12 mt-4 text-center">
                    <h5>The Consul (ESFJ-A)</h5>
                    <img src={KarishmaPersonalityMap} className="img-fluid" alt="personality map" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="personalityTraits" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Personality Traits
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <div className="row">
                <div className="col-md-5">
                  <ul>
                    <li>Designer Head</li>
                    <li>Caricature Artist</li>
                    <li>Doodler</li>
                    <li>Imaginative and creative</li>
                  </ul>
                </div>
                <div className="col-md-5">
                  <ul>
                    <li>Strong practical skills</li>
                    <li>Sense of duty and diligence</li>
                    <li>Logical individual</li>
                    <li>Sensitive and warm at heart</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div id="glimpse" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Glimpse
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <img src={KarishmaWebsiteGlimpse} className="img-fluid" alt="karishma website glimpse" />
            </div>
          </div>

          <div id="tech" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5 className="font-family-playfair">
                Technology
              </h5>
            </div>
            <div className="col-sm-12 col-md-8">
              <h1>
                <FontAwesomeIcon className="mx-4" icon={["fab", "html5"]} />
                <FontAwesomeIcon className="mx-4" icon={["fab", "react"]} />
                <FontAwesomeIcon className="mx-4" icon={["fab", "js-square"]} />
                <FontAwesomeIcon className="mx-4" icon={["fab", "css3-alt"]} />
                <FontAwesomeIcon className="mx-4" icon={["fab", "bootstrap"]} />
                <FontAwesomeIcon className="mx-4" icon={["fab", "github"]} />
              </h1>
            </div>
          </div>

          <NextLink nextLink={{name: "Random Color Picker", slug: "/randomcolorpicker"}} />
        </div>
      </div>
    );
  }
}
