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
          <div className="col-md-12 col-lg-5 mt-5">
            <h5>Open Source</h5>
            <div className="row">
              <div className="col-md-6 mt-4">
                <div className="card h-100" onClick={() => this.redirectToTarget("/work/tilt")}>
                  <div className="card-body">
                    TILT
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="card h-100" onClick={() => this.redirectToTarget("/work/randomcolorpicker")}>
                  <div className="card-body">
                    RandomColorPicker
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="card h-100" onClick={() => this.redirectToTarget("/work/karishma-joshi-website")}>
                  <div className="card-body">
                    Karishma's Website
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="card h-100" onClick={() => this.redirectToTarget("/work/jeff-run")}>
                  <div className="card-body">
                    Jeff-Run
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-5 mt-5">
            <h5>Professional</h5>
            <div className="row">
              <div className="col-md-6 mt-4">
                <a href="https://sell.do" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <div className="card h-100">
                    <div className="card-body">
                      Sell.Do&nbsp;<FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 mt-4">
                <a href="https://www.supahands.com/task-console" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <div className="card h-100">
                    <div className="card-body">
                      Task Console&nbsp;<FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 mt-4">
                <a href="https://www.supahands.com/image-annotation" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <div className="card h-100">
                    <div className="card-body">
                      Image Annotator&nbsp;<FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 mt-4">
                <a href="https://supahands.com" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <div className="card h-100">
                    <div className="card-body">
                      Supahands Website&nbsp;<FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 mt-4">
                <a href="https://www.supaagents.com/" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <div className="card h-100">
                    <div className="card-body">
                      SupahaAgents Website&nbsp;<FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
