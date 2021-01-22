import React, {Component} from 'react';

import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return(
      <div className="container">
        <a className="skip-main" href="#main">
          Skip to main content
        </a>

        <nav className="navbar sticky-top navbar-expand-lg">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#websitePrimaryNavigation" aria-controls="websitePrimaryNavigation" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <Link to="/" className="navbar-brand">Chinmay Joshi</Link>

            <div className="collapse navbar-collapse justify-content-end" id="websitePrimaryNavigation">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/blogs">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
      
    );
  }
}
