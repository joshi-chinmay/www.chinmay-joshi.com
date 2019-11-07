import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
const LoadableWork = Loadable({ loader: () => import('./components/Work.jsx'), loading: Loading});
const LoadableAbout = Loadable({ loader: () => import('./components/About.jsx'), loading: Loading});
const LoadableJeffRun = Loadable({ loader: () => import('./components/work/JeffRun.jsx'), loading: Loading});
const LoadableKarishmaWebsite = Loadable({ loader: () => import('./components/work/KarishmaWebsite.jsx'), loading: Loading});
const LoadableRandomColorPicker = Loadable({ loader: () => import('./components/work/RandomColorPicker.jsx'), loading: Loading});
const LoadableTilt = Loadable({ loader: () => import('./components/work/Tilt.jsx'), loading: Loading});

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

        <div className="container-fluid main-container-portfolio">
          <Menu />
          <DayNightToggle />

          <TransitionGroup>
            <CSSTransition key={Math.random()} classNames="fade" timeout={300}>
              <Switch>
                <Route exact path={'/'} component={LoadableHome} />
                <Route exact path={'/home'} component={LoadableWork} />
                <Route exact path={'/work'} component={LoadableWork} />
                <Route exact path={'/about'} component={LoadableAbout} />
                <Route exact path={"/work/tilt"} component={LoadableTilt} />
                <Route exact path={"/work/randomcolorpicker"} component={LoadableRandomColorPicker} />
                <Route exact path={"/work/karishma-joshi-website"} component={LoadableKarishmaWebsite} />
                <Route exact path={"/work/jeff-run"} component={LoadableJeffRun} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default App;
