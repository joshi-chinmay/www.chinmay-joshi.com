import React, {Component} from 'react';

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
                <div className="card h-100" onClick={() => this.redirectToTarget("/work/sell-do")}>
                  <div className="card-body">
                    Sell.Do
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="card h-100" onClick={() => this.redirectToTarget("/work/task-console")}>
                  <div className="card-body">
                    Task Console
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="card h-100" onClick={() => this.redirectToTarget("/work/image-annotator")}>
                  <div className="card-body">
                    Image Annotator
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="card h-100" onClick={() => this.redirectToTarget("/work/projx-uploader")}>
                  <div className="card-body">
                    ProjX - Uploader
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="card h-100" onClick={() => this.redirectToTarget("/work/projx-supahighway")}>
                  <div className="card-body">
                    ProjX - Supahighway
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="card h-100" onClick={() => this.redirectToTarget("/work/supahands-website")}>
                  <div className="card-body">
                    Supahands Website
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="card h-100" onClick={() => this.redirectToTarget("/work/supa-agent-website")}>
                  <div className="card-body">
                    SupahaAgents Website
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
