import React, {Component} from 'react';
import CJLogoSVG from '../images/Vector.svg';

import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return(
      <div>
        <a className="skip-main" href="#main">
          Skip to main content
        </a>

        <nav className="navbar navbar-expand-lg">
          <Link to="/" className="navbar-brand">
            <img src={CJLogoSVG} width="30" alt="website home logo"></img>
          </Link>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="websitePrimaryNavigation">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/about" className="nav-link ml-2">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a href="https://drive.google.com/file/d/126ONcBVh7sUJmA2Nm0vDf12YFn4usOm2/view" className="nav-link ml-2" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>

            </ul>
          </div>
        </nav>

      </div>
      
    );
  }
}
