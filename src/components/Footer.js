import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return(
      <footer className="footer-attribution-container text-center">
        <div className="row no-gutters">
          <div className="col-sm-12">
            <small className="text-monospace">
              &copy; 2020 · Chinmay Joshi · 
              This website is made with &#9829;, <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.JS</a> & <a href="https://www.framer.com/api/motion/" target="_blank" rel="noopener noreferrer">Framer Motion</a>.
            </small>
          </div>
        </div>
      </footer>
    );
  }
}
