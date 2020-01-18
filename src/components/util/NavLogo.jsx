import React, {Component} from 'react';
import CjNavLogo from '../../images/CJ-abstract-logo.png';

export default class NavLogo extends Component {
  render() {
    return(
      <div className="logo-container">
        <a href="/home">
          <img src={CjNavLogo} height="50" />
        </a>
      </div>
    );
  }
}
