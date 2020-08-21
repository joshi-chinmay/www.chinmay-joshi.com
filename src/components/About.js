import React, {Component} from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import PP from '../images/CJ-bw.png';
import SocialMediaIcons from './util/SocialMediaIcons';

export default class About extends Component {
  componentDidMount() {
    document.title = "About | Chinmay Joshi";
  }

  render() {
    return(
      <TransitionGroup component="main">
        <CSSTransition key={window.location.pathname.split('/')[1] || '/'} classNames="fade" timeout={{ enter: 10000, exit: 10000 }} appear>
          <div className="main-page-container">
            <div className="blob">
              <svg xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
              </svg>
            </div>

            <div className="row px-5">
              <div className="col-xs-12 col-md-5">
                <img src={PP} className="w-100" alt="I look great. just sayin." />
              </div>
              <div className="col-xs-12 col-md-6 mt-5 mb-5">
                <h1 className="mt-1 text-gradient text-gradient-secondary">
                  Hi, I am Chinmay!
                </h1>

                <h3 className="font-weight-normal mt-3 text-gradient text-gradient-default">
                  Software Engineer turned Product Designer.
                </h3>

                <div className="row mt-4">
                  <div className="col-xs-12 col-md-12 mt-3 font-weight-bolder">
                    <p>
                      I love caffeine in general, and my creative solutions are mostly an outcome of a desk full of sticky notes, pens, markers, sketches, and a cup of coffee or tea. I believe learning is about traveling and observing. Hence, in my free time, you would mostly find me traveling and exploring different cultures.
                    </p>
                    <p>
                      <b>Creative Stack</b> - Figma, Sketch, Adobe Photoshop, Adobe XD.
                    </p>
                    <p>
                      <b>Technology Stack</b> - HTML, CSS, JavaScript, React.JS, Backbone.JS, Ember.JS, Ruby on Rails, AWS Cloud, Serverless, SQL, MongoDB, Git, Jira, Trello.
                    </p>
                    <p>
                      I am here to design, build, create and learn consistently. Please feel free to connect or <a href="https://calendly.com/meet-with-chinmay" className="text-lowercase" target="_blank" rel="noopener noreferrer">Schedule a time to talk</a>.
                    </p>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="social-media-icons-container about-page col-xs-12 col-md-12">
                    <SocialMediaIcons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}
