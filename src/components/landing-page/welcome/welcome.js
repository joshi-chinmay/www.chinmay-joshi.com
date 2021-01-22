import React from 'react';
import "./styles.scss"

function Welcome() {
  return (
    <div className="landing-page text-center">
      <p className="landing-text">
        Product Designer based in San Francisco Bay Area. Currently designing experiences at&nbsp;
        <a className="landing-link" href="https://www.levelops.io/" target="_blank" rel="noopener noreferrer">LevelOps</a>.
        Former Software Engineer at&nbsp;
        <a className="landing-link" href="https://supahands.com/" target="_blank" rel="noopener noreferrer">Supahands</a>
        &nbsp;&&nbsp;
        <a className="landing-link" href="https://amuratech.com/" target="_blank" rel="noopener noreferrer">AmuraTech</a>.
      </p>
    </div>
  );
}

export default Welcome;