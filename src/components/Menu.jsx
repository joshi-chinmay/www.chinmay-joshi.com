import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({menu: !this.state.menu});
  }

  render() {
    return(
      <div>
        <div className="website-menu-toggle">
          <button type="button" className="btn menu-activator" onClick={() => this.toggleMenu()}>
            <FontAwesomeIcon icon={["fas", "bars"]} />
          </button>
        </div>

        <div className={"container-menu " + (this.state.menu ? "d-block" : "d-none") }>
          <div className="menu-deactivator-container" onClick={() => this.toggleMenu()}>
            <button type="button" className="btn menu-deactivator">
              <FontAwesomeIcon icon={["fas", "times"]} />
            </button>
          </div>

          <div className="centered-menu-items">
            <a href="/">Home</a>
            <br />
            <a href="/work">Work</a>
            <br />
            <a href="/about">About</a>
            <br />
            <a href="https://dev.to/joshichinmay">Blog</a>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
