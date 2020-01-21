import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class WorkPageNavigator extends Component {
  render() {
    const links = [];
    const linkNames = this.props.linkNames;
    for (let i = 0; i < linkNames.length; i++) {
      links.push(
        <div className="naviation-link" key={i}>
          <a href={"#" + linkNames[i]} className="text-decoration-none small">
            {linkNames[i].replace(/([A-Z])/g, ' $1').trim()} <FontAwesomeIcon icon={["far", "circle"]} />
          </a>
        </div>
      );
    }

    return(
      <div className="fixed-page-navigator">
        {links}

        <div className="naviation-link mt-4">
          <a href="/work" className="text-decoration-none small">Go Back</a>
        </div>
      </div>
    );
  }
}
