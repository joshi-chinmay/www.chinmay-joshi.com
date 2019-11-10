import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Work extends Component {
  constructor(props) {
    super(props);

    this.redirectToTarget = this.redirectToTarget.bind(this);
  }

  redirectToTarget(target) {
    this.props.history.push(target);
  }

  render() {
    return(
      <div className="main-page-container p-5">
        <div className="row">
          <div className="col-md-12 col-lg-6 mt-5">
            <h5>Open Source</h5>
            <div className="row">
              <div className="col-md-6 mt-4">
                <div className="card h-100">
                  <div className="card-header">
                    TILT
                  </div>
                  <div className="card-body">
                    Today I listened to - where users can write about the songs they've been listening to, and share it with their friends.
                  </div>
                  <div className="card-footer">
                    <a href="/work/tilt">View Project</a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card h-100">
                  <div className="card-header">
                    StepUp
                  </div>
                  <div className="card-body">
                    Reward-based app I designed for my university, to help students and college staff take extra steps in a day to achieve a healthy lifestyle.
                  </div>
                  <div className="card-footer">
                    <a href="/work/jeff-run">View Project</a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card h-100">
                  <div className="card-header">
                    RandomColorPicker
                  </div>
                  <div className="card-body">
                    A small website which creates random colors on the go. Believe me, it's fun! Go check it out.
                  </div>
                  <div className="card-footer">
                    <a href="/work/randomcolorpicker">View Project</a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card h-100">
                  <div className="card-header">
                    Karishma's Website
                  </div>
                  <div className="card-body">
                    Karishma is a Landscape Architect, and a friend of mine. I designed a website to showcase her work and portfolio.
                    Pssst.. this was my first website as a UX designer.
                  </div>
                  <div className="card-footer">
                    <a href="/work/karishma-joshi-website">View Project</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-6 mt-5">
            <h5>Professional</h5>
            <div className="row">
              <div className="col-md-6 mt-4">
                <div className="card h-100">
                  <div className="card-header">
                    Sell.Do
                  </div>
                  <div className="card-body">
                    Sell.Do is an automated CRM platform includig sales and marketing automation - focused on real estate market .
                  </div>
                  <div className="card-footer">
                    <a href="https://sell.do" target="_blank" rel="noopener noreferrer">
                      View Project <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card h-100">
                  <div className="card-header">
                    Task Console
                  </div>
                  <div className="card-body">
                    Helps to Build and run microtasking projects with security, quality and efficiency automation features.
                  </div>
                  <div className="card-footer">
                    <a href="https://www.supahands.com/task-console" target="_blank" rel="noopener noreferrer">
                      View Project <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card h-100">
                  <div className="card-header">
                    Image Annotator
                  </div>
                  <div className="card-body">
                    An application curating images by drawing and labeling bounding boxes, especially used by companies focused on autonomous vehicles.
                  </div>
                  <div className="card-footer">
                    <a href="https://www.supahands.com/image-annotation" target="_blank" rel="noopener noreferrer">
                      View Project <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card h-100">
                  <div className="card-header">
                    Supahands Website
                  </div>
                  <div className="card-body">
                    Supahands is a company I worked at for a year. I helped them design their website using React.
                  </div>
                  <div className="card-footer">
                    <a href="https://www.supahands.com/" target="_blank" rel="noopener noreferrer">
                      View Project <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card h-100">
                  <div className="card-header">
                    Supaagents Website
                  </div>
                  <div className="card-body">
                    The workforce behind Supahands. Supaagents is a community of remote workers or freelancers across the globe.
                  </div>
                  <div className="card-footer">
                    <a href="https://www.supaagents.com/" target="_blank" rel="noopener noreferrer">
                      View Project <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
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
