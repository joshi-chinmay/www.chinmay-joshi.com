import React, {Component} from 'react';
import ResumePDF from '../docs/Resume.pdf';

export default class Resume extends Component {
  render() {
    return(
      <div className="main-page-container">
        <div className="row">
          <div className="offset-lg-2 col-md-12 col-lg-8">
            <div className="embed-responsive embed-responsive-16by9 rounded">
              <iframe class="embed-responsive-item" src={ResumePDF} type="application/pdf" allowfullscreen />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
