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
      <div className="main-page-container">
        <div className="row">
          <div className="offset-md-1 col-xs-12 col-md-10">
            <div className="card-columns">
              <div className="card">
                <div className="card-header">
                  StepUp
                </div>
                <div className="card-body">
                  Step up and take your steps to being fit with this reward-based app.
                </div>
                <div className="card-footer">
                  <a href="/work/step-up" className="small">View</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a href="https://xd.adobe.com/view/6f6a4222-3c55-432f-4b7e-31dbc42c7541-195b/" className="small" target="_blank" rel="noopener noreferrer">
                    Prototype <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  TILT
                </div>
                <div className="card-body">
                  Today I listened to - Sing, listen, share, connect !!
                </div>
                <div className="card-footer">
                  <a href="/work/tilt" className="small">View</a>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  Random Color Picker
                </div>
                <div className="card-body">
                  What if you could create random colors on the go. Believe me, it's fun! Why don’t you check it out?
                </div>
                <div className="card-footer">
                  <a href="/work/randomcolorpicker" className="small">View</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a href="http://randomcolorpicker.xyz/" className="small" target="_blank" rel="noopener noreferrer">
                    Live <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  Karishma's Website
                </div>
                <div className="card-body">
                  A showcase of work for my Architect friend and more than that my first ever web design! Whoop!!!!
                  <br />
                  Pssst.. this was my first website as a UX designer.
                </div>
                <div className="card-footer">
                  <a href="/work/karishma-joshi-website" className="small">View</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a href="http://www.karishma-joshi.com/" className="small" target="_blank" rel="noopener noreferrer">
                    Live <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  Task Console
                </div>
                <div className="card-body">
                  Task Console helps to Build and run microtasking projects with security, quality and efficiency automation features.
                </div>
                <div className="card-footer">
                  <a href="https://www.supahands.com/task-console" className="small" target="_blank" rel="noopener noreferrer">
                    view <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  Image Annotator
                </div>
                <div className="card-body">
                  An application curating images by drawing and labeling bounding boxes, especially used by companies focused on autonomous vehicles.
                </div>
                <div className="card-footer">
                  <a href="https://www.supahands.com/image-annotation" className="small" target="_blank" rel="noopener noreferrer">
                    view <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  Supahands Website
                </div>
                <div className="card-body">
                  Supahands is a company I worked at for a year. I designed their website using React.
                </div>
                <div className="card-footer">
                  <a href="https://www.supahands.com/" className="small" target="_blank" rel="noopener noreferrer">
                    view <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  Supaagents Website
                </div>
                <div className="card-body">
                  The workforce behind Supahands. Supaagents is a community of remote workers or freelancers across the globe.
                </div>
                <div className="card-footer">
                  <a href="https://www.supaagents.com/" className="small" target="_blank" rel="noopener noreferrer">
                    view <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
