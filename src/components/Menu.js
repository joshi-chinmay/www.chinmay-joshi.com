import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return(
      <div>
        <a className="skip-main" href="#main">
          Skip to main content
        </a>

        <nav className="navbar navbar-expand-lg">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#websitePrimaryNavigation" aria-controls="websitePrimaryNavigation" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link to="/" className="navbar-brand font-weight-bold">Chinmay Joshi</Link>

          <div className="collapse navbar-collapse justify-content-end" id="websitePrimaryNavigation">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link font-weight-bold mr-2" to="/blogs">Blog</Link>
              </li>
              <li className="nav-item">
                <a href="https://www.canva.com/design/DAEEytxUPoo/Zc_pNxqZkJgWyzsar26m9Q/view" className="nav-link mr-2" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>

              <li className="nav-item">
                <a href="mailto:chinmayj93@gmail.com" className="nav-link mr-2" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={["fas", "envelope"]} size="1x" />
                </a>
              </li>

              <li className="nav-item">
                <a href="https://www.linkedin.com/in/joshichinmayajit/" className="nav-link mr-2" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x" />
                </a>
              </li>

              <li className="nav-item">
                <a href="https://github.com/joshi-chinmay/" className="nav-link" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={["fab", "github"]} size="1x" />
                </a>
              </li>

            </ul>
          </div>
        </nav>

      </div>
      
    );
  }
}
