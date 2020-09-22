import React, {Component} from 'react';

import SlideIn from '../layouts/slide-in';
import SocialMediaIcons from './util/SocialMediaIcons';

import helloCJ from '../images/hello.jpeg';

export default class About extends Component {
  componentDidMount() {
    document.title = "About | Chinmay Joshi";
  }

  render() {
    return(
      <SlideIn>
        <div className="row mt-5">
          <div className="col-xs-12 col-md-4 text-center text-center mt-5">
            <img src={helloCJ} className="mt-5 w-50" alt="I look great. just sayin." />
          </div>

          <div className="col-xs-12 col-md-6 mt-5 mb-5">
            <h1 className="mt-1">
              Hi, I am Chinmay!
            </h1>

            <h3 className="font-weight-normal mt-3">
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
                  I am here to design, build, create and learn consistently. Please feel free to connect or <a href="https://calendly.com/meet-with-chinmay" target="_blank" rel="noopener noreferrer">Schedule a time to talk</a>.
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
      </SlideIn>
    );
  }
}
