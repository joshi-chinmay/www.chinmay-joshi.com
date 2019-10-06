import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class DayNightToggle extends Component {
  constructor(props) {
    super(props);

    this.toggleDayNightMode = this.toggleDayNightMode.bind(this);
  }

  toggleDayNightMode(activateMode) {
    if( !document.body.classList.contains(activateMode + "-time") ) {
      document.body.classList = [activateMode + "-time"];
    }
  }

  render() {
    return(
      <div className="day-night-mode-toggle">
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-warning text-white day-btn" onClick={() => this.toggleDayNightMode("day")}>
            <FontAwesomeIcon icon={["fas", "sun"]} />
          </button>
          <button type="button" className="btn btn-secondary text-white night-btn" onClick={() => this.toggleDayNightMode("night")}>
            <FontAwesomeIcon icon={["fas", "moon"]} />
          </button>
        </div>
      </div>
    );
  }
}
