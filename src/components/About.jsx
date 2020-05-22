import React, {Component} from 'react';

import PP from '../images/pp.jpg';
import SocialMediaIcons from './util/SocialMediaIcons.jsx';

export default class About extends Component {
  render() {
    return(
      <div className="main-page-container">
        <div className="row px-5 py-2">
          <div className="col-xs-12 col-md-5">
            <div className="mt-5">
              <img src={PP} className="w-75 mx-auto my-auto d-block display-picture-border display-picture" alt="Chinmay Profile Face" />
            </div>
          </div>
          <div className="col-xs-12 col-md-6 mt-5 mb-5">
            <h1 className="mt-1">
              Hi, I am Chinmay! <span className="h1" role="img" aria-label="nerd face">🤓</span>
            </h1>
            <span className="mt-4">
              I design memorable, viable, and usable product experiences by amalgamating principles of user experience design, cognitive psychology, computer science, and technology. I believe the best solution can be achieved with simplicity and logical decision making.
              <br />I love caffeine in general, and my creative solutions are mostly an outcome of a desk full of sticky notes, pens, markers, sketches, and a cup of coffee or tea. I believe learning is about traveling and observing. Hence, in my free time, you would mostly find me traveling and exploring different cultures.
            </span>

            <div className="row mt-4">
              <div className="col-xs-12 col-md-12 mt-3">
                <span>
                  <b>Creative Stack</b> - Adobe Photoshop, Adobe XD, Figma, Sketch.
                </span>
              </div>
              <div className="col-xs-12 col-md-12 mt-3">
                <span>
                  <b>Technology Stack</b> - HTML, CSS, JavaScript, React.JS, Backbone.JS, Ember.JS, Ruby on Rails, AWS Cloud, Serverless, SQL, MongoDB, Git, Jira, Trello.
                </span>
              </div>
              <div className="col-xs-12 col-md-12 mt-2">
                <span>
                  I am here to design, build, create and learn consistently. Please feel free to connect or <a href="https://calendly.com/meet-with-chinmay" className="text-lowercase" target="_blank" rel="noopener noreferrer">Schedule a time to talk</a>.
                </span>
              </div>
            </div>

            <div className="row mt-5">
              <div className="social-media-icons-container about-page text-center col-xs-12 col-md-12">
                <SocialMediaIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
