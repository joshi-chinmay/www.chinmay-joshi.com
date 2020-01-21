import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false
    }
  }

  toggleMenu() {
    this.setState({menu: !this.state.menu});
  }

  render() {
    return(
      <div>
        <div className="website-menu-toggle">
          <button type="button" className="btn text-warning menu-toggle-button" onClick={this.toggleMenu.bind(this)}>
            <FontAwesomeIcon icon={["fas", "bars"]} className="h3" />
          </button>
        </div>

        <div className={"container-menu " + (this.state.menu ? "active" : "")  + " text-center"}>
          <a href="/">Home</a>
          <a href="/work">Work</a>
          <a href="/about">About</a>
          <a href="/resume">Resume</a>
          <a href="https://dev.to/joshichinmay">Blog</a>
          <a onClick={this.toggleMenu.bind(this)} href="#" className="text-decoration-none">&times;</a>
        </div>
      </div>
    );
  }
}
