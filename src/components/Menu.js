import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Menu extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg">
        <a className="skip-main" href="#main" tabIndex="0">
          Skip to main content
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#websitePrimaryNavigation" aria-controls="websitePrimaryNavigation" aria-expanded="false" aria-label="Toggle Navigation">
          <FontAwesomeIcon icon={["fas", "bars"]} />
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="websitePrimaryNavigation">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/blogs">Blog</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://drive.google.com/file/d/1xpDKd1ADDaN0b-a7w3wpztMXWR5S3mR-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
