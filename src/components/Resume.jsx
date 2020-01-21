import React, {Component} from 'react';
import ResumeIMG from '../images/resume.png';

export default class Resume extends Component {
  render() {
    return(
      <div className="main-page-container">
        <div className="row">
          <div className="offset-lg-2 col-md-12 col-lg-8 mb-5 text-center">
            <img src={ResumeIMG} className="img-fluid img-responsive border rounded w-75"></img>
          </div>
        </div>
      </div>
    );
  }
}
