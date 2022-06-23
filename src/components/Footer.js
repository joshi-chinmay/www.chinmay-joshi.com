import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <div>
      <footer className="text-center">
        <hr />
        <h2 className="mt-5">Get in touch</h2>

        <div className="mt-4 mb-5">
          <a href="mailto:chinmayj93@gmail.com" className="mx-4" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fas", "envelope"]} size="2x" />
          </a>
          <a href="tel:+14156761018" className="mx-4" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fas", "phone"]} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/joshichinmayajit/" className="mx-4" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
          </a>
          <a href="https://github.com/joshi-chinmay/" className="mx-4" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
          </a>
        </div>
        
        <div className="mt-5">
          <p>
            This website is made with &nbsp; 
            <span role="img" aria-label="heart emoji">❤️</span> + &nbsp; 
            <span role="img" aria-label="coffee emoji">☕</span> + &nbsp;
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.JS</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;