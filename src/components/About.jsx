import React, {Component} from 'react';
import PP from '../images/pp.jpg';
import SocialMediaIcons from './util/SocialMediaIcons.jsx';

export default class About extends Component {
  render() {
    return(
      <div className="main-page-container">
        <div className="row">
          <div className="col-xs-12 col-md-5">
            <div className="mt-5">
              <img src={PP} className="w-75 mx-auto my-auto d-block display-picture-border display-picture" />
            </div>
          </div>
          <div className="col-xs-12 col-md-6 mt-5">
            <h4 className="mt-1">
              Hi, I am Chinmay...
            </h4>
            <p className="mt-4">
              I design memorable, viable, usable and scalable experience by amalgamating principles of user experience design, cognitive psychology and interaction design. I used to be a full-stack software engineer, but nowadays I am trying to be a UI/UX designer. I love caffeine in general. Tea and coffee depends on the mood. I drink 4-5 cups of coffee/tea in a day. I like to travel to different places.
              Being an introvert you will not find much social media presence.
              <br /><br />
              Let me tell you more about my work stack...
            </p>

            <div className="row">
              <div className="col-xs-12 col-md-12 mt-2">
                Creative Stack - Adobe Illustrator, Adobe XD, Figma, inVision, Sketch, Adobe Lightroom, sticky notes & sharpie
              </div>
              <div className="col-xs-12 col-md-12 mt-2">
                Technology Stack - HTML, CSS, JavaScript, React.JS, Backbone.JS, Ember.JS, Ruby on Rails, AWS Cloud, Serverless, SQL, MongoDB, Git, Jira, Trello
              </div>
            </div>

            <div className="row">
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
