import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Loadable from 'react-loadable';
import Loading from './components/Loading.jsx';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Menu from './components/Menu.jsx';

import "./styles/Styles.scss";

import NavLogo from './components/util/NavLogo.jsx';

const LoadableHome = Loadable({ loader: () => import('./components/Home.jsx'), loading: Loading});
const LoadableWork = Loadable({ loader: () => import('./components/Work.jsx'), loading: Loading});
const LoadableAbout = Loadable({ loader: () => import('./components/About.jsx'), loading: Loading});
const LoadableStepUp = Loadable({ loader: () => import('./components/work/StepUp.jsx'), loading: Loading});
const LoadableKarishmaWebsite = Loadable({ loader: () => import('./components/work/KarishmaWebsite.jsx'), loading: Loading});
const LoadableRandomColorPicker = Loadable({ loader: () => import('./components/work/RandomColorPicker.jsx'), loading: Loading});
const LoadableTilt = Loadable({ loader: () => import('./components/work/Tilt.jsx'), loading: Loading});

library.add(fab, fas);

class App extends Component {

  render() {
    return (
      <div className="grand-parent-container">
        <NavLogo />
        <Menu />

        <div className="container-fluid main-container-portfolio">
          <Switch>
            <Route exact path={'/'} component={LoadableHome} />
            <Route exact path={'/home'} component={LoadableHome} />
            <Route exact path={'/work'} component={LoadableWork} />
            <Route exact path={'/about'} component={LoadableAbout} />
            <Route exact path={"/work/tilt"} component={LoadableTilt} />
            <Route exact path={"/work/randomcolorpicker"} component={LoadableRandomColorPicker} />
            <Route exact path={"/work/karishma-joshi-website"} component={LoadableKarishmaWebsite} />
            <Route exact path={"/work/step-up"} component={LoadableStepUp} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
