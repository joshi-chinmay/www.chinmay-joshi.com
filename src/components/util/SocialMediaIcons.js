import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SocialMediaIcons extends Component {
  render() {
    return(
      <div className="social-media-icons">
        <a className="social-media-icon" href="mailto:chinmayj93@gmail.com">
          <FontAwesomeIcon icon={["far", "envelope"]} />
        </a>
        <a className="social-media-icon" href="https://dev.to/joshichinmay">
          <FontAwesomeIcon icon={["fab", "dev"]} />
        </a>
        <a className="social-media-icon" href="https://www.linkedin.com/in/chinmay-joshi-65292598/">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a className="social-media-icon" href="https://github.com/joshi-chinmay">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </div>
    );
  }
}
