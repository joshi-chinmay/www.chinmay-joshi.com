import React from 'react';

import Welcome from './landing-page/welcome/welcome'
import Work from './landing-page/work/work'

function Home() {
  return (
    <div className="container">
      <Welcome />
      <Work />
    </div>
  );
}

export default Home;