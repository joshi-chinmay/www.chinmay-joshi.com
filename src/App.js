import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Loadable from 'react-loadable';

import Loading from './components/Loading.jsx';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import Menu from './components/Menu.jsx';
import Footer from './components/Footer.jsx';

import "./styles/Styles.scss";

const LoadableHome = Loadable({ loader: () => import('./components/Home.jsx'), loading: Loading});
const LoadableWork = Loadable({ loader: () => import('./components/Work.jsx'), loading: Loading});
const LoadableAbout = Loadable({ loader: () => import('./components/About.jsx'), loading: Loading});
const LoadableBlog = Loadable({ loader: () => import('./components/Blog.jsx'), loading: Loading});
const LoadableStepUp = Loadable({ loader: () => import('./components/work/StepUp.jsx'), loading: Loading});
const LoadableKarishmaWebsite = Loadable({ loader: () => import('./components/work/KarishmaWebsite.jsx'), loading: Loading});
const LoadableRandomColorPicker = Loadable({ loader: () => import('./components/work/RandomColorPicker.jsx'), loading: Loading});
const LoadableTilt = Loadable({ loader: () => import('./components/work/Tilt.jsx'), loading: Loading});

const LoadablePathwaysToHousing = Loadable({ loader: () => import('./components/work/PathwaysToHousing.jsx'), loading: Loading});
const LoadableSodaMachine = Loadable({ loader: () => import('./components/work/SodaMachine.jsx'), loading: Loading});
const LoadableHabit = Loadable({ loader: () => import('./components/work/Habit.jsx'), loading: Loading});
const LoadablePublicTransitSafety = Loadable({ loader: () => import('./components/work/PublicTransitSafety.jsx'), loading: Loading});

library.add(fab, fas, far);

class App extends Component {

  render() {
    const currentKey = window.location.pathname.split('/')[1] || '/';
    const timeout = { enter: 1000, exit: 1000 };

    return (
      <div className="grand-parent-container">
        <Menu />

        <Route render={({ location }) => (
          <TransitionGroup component="main" className="page-main">
            <CSSTransition key={currentKey} classNames="fade" timeout={timeout} appear>
              <div className="container-fluid">
                <main className="main-container-portfolio">
                  <Switch location={location}>
                    <Route exact path={'/'} component={LoadableHome} />
                    <Route exact path={'/home'} component={LoadableHome} />
                    <Route exact path={'/work'} component={LoadableWork} />
                    <Route exact path={'/about'} component={LoadableAbout} />
                    <Route exact path={'/blogs'} component={LoadableBlog} />
                    <Route exact path={"/work/tilt"} component={LoadableTilt} />
                    <Route exact path={"/work/pathways-to-housing"} component={LoadablePathwaysToHousing} />
                    <Route exact path={"/work/accessible-soda-machine"} component={LoadableSodaMachine} />
                    <Route exact path={"/work/habit"} component={LoadableHabit} />
                    <Route exact path={"/work/public-transit-safety"} component={LoadablePublicTransitSafety} />

                    <Route exact path={"/work/randomcolorpicker"} component={LoadableRandomColorPicker} />
                    <Route exact path={"/work/karishma-joshi-website"} component={LoadableKarishmaWebsite} />
                    <Route exact path={"/work/step-up"} component={LoadableStepUp} />
                  </Switch>
                </main>
              </div>
            </CSSTransition>
          </TransitionGroup>
        )}/>

      <Footer />
      </div>
    );
  }
}

export default App;
