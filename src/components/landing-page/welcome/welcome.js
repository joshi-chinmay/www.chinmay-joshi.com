import React from 'react';
import "./styles.scss"

function Welcome() {
  return (
    <div className="landing-page">
      <h1 className="landing-text">
        Chinmay Joshi —
      </h1>
      <p className="lead-lg font-style-merriweather">
        Product Designer at <a href="https://nextiva.com/" className="font-weight-bold" target="_blank" rel="noopener noreferrer">Nextiva</a>
        &nbsp;& Design Mentor on <a href="https://adplist.org/mentors/chinmay-joshi" className="font-weight-bold" target="_blank" rel="noopener noreferrer">AdpList</a>.
      </p>
    </div>
  );
}

export default Welcome;