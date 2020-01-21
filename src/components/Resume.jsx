import React, {Component} from 'react';
import ResumePDF from '../docs/Resume.pdf';

export default class Resume extends Component {
  render() {
    const { pageNumber, numPages } = this.state;

    return(
      <div className="main-page-container">
        <div className="row">
          <div className="offset-lg-2 col-md-12 col-lg-8 text-center">
            <div className="embed-responsive embed-responsive-16by9">
              <embed src={ResumePDF} type="application/pdf" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
