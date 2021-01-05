import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Footer extends Component {
  render() {
    return(
      <footer className="footer-attribution-container text-center">
        <div className="row no-gutters">
          <div className="col-sm-12">
            <h3 className="font-poiret">Want to say hello?</h3>
            
            <div className="mt-4 mb-5">
              <FontAwesomeIcon icon={["far", "envelope"]} />
              <a href="mailto:chinmayj93@gmail.com" className="text-monospace ml-2 mr-5">
                chinmayj93@gmail.com
              </a>

              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
              <a href="mailto:chinmayj93@gmail.com" className="text-monospace ml-2 mr-5">
                LinkedIn
              </a>

              <FontAwesomeIcon icon={["far", "calendar"]} />
              <a href="https://calendly.com/meet-with-chinmay" className="text-monospace ml-2 mr-5">
                Collaborate
              </a>
            </div>
          </div>
        </div>

        <div className="row no-gutters mt-5">
          <div className="col-sm-12">
            <small className="text-monospace">
              &copy; 2021 · Chinmay Joshi · 
              This website is made with &#9829;, <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.JS</a> & <a href="https://www.framer.com/api/motion/" target="_blank" rel="noopener noreferrer">Framer Motion</a>.
            </small>
          </div>
        </div>
      </footer>
    );
  }
}
