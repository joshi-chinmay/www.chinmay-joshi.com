import React, {Component} from 'react';

export default class About extends Component {
  render() {
    return(
      <div className="main-page-container mt-5">
        <div className="row mt-2">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <h1 className="lead-lg">Chinmay Joshi</h1>
            <h5>UI-UX Designer | Frontend Engineer</h5>

          <a href="mailto:chinmayj93@gmail.com">chinmayj93@gmail.com</a>
            &nbsp;&nbsp;
            <a href="tel:+14156761018">+1-(415)-676-1018</a>
          </div>

          <div className="col-md-12 col-lg-6 offset-lg-3 mt-5">
            <div className="card">
              <div className="card-header">
                Tech Stack of my choice
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <b>Frontend</b> - HTML, CSS, JavaScript, React.JS, Backbone.JS, Marionette.JS, and Ember.JS
                  </li>
                  <li>
                    <b>Backend</b> - Ruby, Ruby On Rails, Python, and Node.JS
                  </li>
                  <li>
                    <b>Databases</b> - MongoDB, MySQL, and DynamoDB
                  </li>
                  <li>
                    <b>Cloud</b> - Amazon Web Services and Serverless
                  </li>
                  <li>
                    <b>Project Management Tools</b> - Git, JIRA, Confluence, Trello, CI and CD Tools
                  </li>
                  <li>
                    <b>Creative</b> - Prototyping, wireframing, user stories, and UX flows
                  </li>
                  <li>
                    Sharpie and sticky notes are my favorite tools as a UX designer!
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-6 offset-lg-3 mt-5 mb-5">
            <div className="card">
              <div className="card-header">
                Work Experience
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    At present, I am working a 'Graduate Assistant' in Technology Support Services department in Thomas Jefferson University.
                  </li>
                  <li>
                    Supahands, Kuala lumpur, Malaysia, as a 'Full Stack Software Engineer - ii', (April 2018 - April 2019).
                  </li>
                  <li>
                    Amura Marketing Technologies, Pune, India, as a 'Full Stack Software Engineer', (december 2015 - april 2018).
                  </li>
                  <li>
                    And before that, I completed my internship at Amura Marketing Technologies, Pune, India, as a 'Software Engineer - Intern'.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
