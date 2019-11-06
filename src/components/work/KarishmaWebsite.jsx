import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import KarishmaPersonalityMap from '../../images/work/karishma-website/Karishma-Personality.png';

export default class KarishmaWebsite extends Component {
  render() {
    return(
      <div className="row">
        <div className="col-md-12">

          <div className="row mt-5">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <h1 className="lead-lg">
                Karishma Joshi - Website
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
                      Karishma Joshi, is a dear friend of mine who asked me to design a website for her as she was preparing herself for internship hunt. She wished to showcase her portfolio online and in a handbook. Hence we kickstarted this project by initiating a discussion about basics of web development and the information I'd need from her.
                    </p>
                  </div>
                </div>

                <div id="infoAndMindmapping" className="card mt-5">
                  <div className="card-header">
                    Information Gathering & Mindmapping
                  </div>
                  <div className="card-body">
                    <p className="text-justify">
                      In order to begin the websit development, I decided to gather more data about Karishma. I wanted her website to be a reflexition of her personality. So my first step was to analyse her likes and dislikes.
                      I asked her to take a small personality test so that I can visualize her likes and dislikes.
                    </p>
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <h5>The Consul (ESFJ-A)</h5>
                        <img src={KarishmaPersonalityMap} className="img-fluid" />
                      </div>
                    </div>

                    <div className="mt-4">
                      <h5>
                        Her Traits, likes and dislikes -
                      </h5>
                      <ul>
                        <li>Designing</li>
                        <li>Caricature artist</li>
                        <li>Doodling</li>
                        <li>Strong Practical Skills</li>
                        <li>Strong logiacl reasoning</li>
                        <li>Strong sense of duty</li>
                        <li>Sensitive and warm at heart</li>
                      </ul>
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
                          <FontAwesomeIcon className="mx-2 text-disabled" icon={["fab", "react"]} />
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

              <div className="col-sm-12 col-md-2 col-lg-2">
                <div className="floating-menu">
                  <div className="list-item">
                    <a href="#vision" className="menu-item-link">
                      Vision
                    </a>
                  </div>
                  <div className="list-item">
                    <a href="#infoAndMindmapping" className="menu-item-link">
                      Mindmapping
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
