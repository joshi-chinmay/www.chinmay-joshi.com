import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Menu extends Component {
  render() {
    return(
      <div className="container-menu">
        <a className="menu-link" href="/">Home</a>
        <a className="menu-link" href="/work">Work</a>
        <a className="menu-link" href="/about">About</a>
        <a className="menu-link" href="/resume">Resume</a>
        <a className="menu-link" href="https://dev.to/joshichinmay">Blog</a>
      </div>
    );
  }
}
