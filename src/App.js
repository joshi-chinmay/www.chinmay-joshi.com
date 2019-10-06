import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loadable from 'react-loadable';
import Loading from './components/Loading.jsx';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import BgParallax from './components/BgParallax.jsx';
import DayNightToggle from './components/DayNightToggle.jsx';
import Menu from './components/Menu.jsx';

import "./styles/Styles.scss";

const LoadableHome = Loadable({ loader: () => import('./components/Home.jsx'), loading: Loading});

library.add(fab, fas);

class App extends Component {
  constructor(props) {
    super(props);

    this.applyModeClass();
  }

  applyModeClass() {
    var today = new Date().getHours();
    var modeName = ((today >= 7 && today <= 18) ? "day" : "night") + "-time";
    document.body.classList.add(modeName);
  }

  render() {
    return (
      <div id="grand-parent-container">
        <BgParallax />

        <div className="main-container-portfolio">
          <Menu />
          <DayNightToggle />

          <Switch>
            <Route exact path={'/'} component={LoadableHome} />
            <Route path={'/home'} component={LoadableHome} />

            <Route component={LoadableHome} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
