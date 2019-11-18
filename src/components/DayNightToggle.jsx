import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class DayNightToggle extends Component {
  constructor(props) {
    super(props);

    this.setMode = this.setMode.bind(this);
  }

  setMode(activateMode) {
    if(this.doesNeedsChange(activateMode)) {
      var $elem = document.getElementsByClassName("grand-parent-container")[0];
      localStorage.setItem("currentWebsiteMode", activateMode);

      if (activateMode === "day-time") {
        $elem.classList.remove("night-time");
        $elem.classList.add("day-time");
      } else if (activateMode === "night-time") {
        $elem.classList.remove("day-time");
        $elem.classList.add("night-time");
      }
    }
  }

  doesNeedsChange(futureMode) {
    return( !(localStorage.getItem('currentWebsiteMode') === futureMode) );
  }

  render() {
    return(
      <div className="day-night-mode-toggle">
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-dark btn-day" onClick={() => this.setMode("day-time")}>
            <FontAwesomeIcon icon={["fas", "sun"]} />
          </button>
          <button type="button" className="btn btn-dark btn-night" onClick={() => this.setMode("night-time")}>
            <FontAwesomeIcon icon={["fas", "moon"]} />
          </button>
        </div>
      </div>
    );
  }
}
