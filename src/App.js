import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from "react-router-dom";

import { AnimatePresence } from 'framer-motion';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import Menu from './components/Menu';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';

import "./styles/Styles.scss";

const LoadableHome = lazy(() => import('./components/Home'));
const LoadableHome1 = lazy(() => import('./components/Home1'));
const LoadableAbout = lazy(() => import('./components/About'));
const LoadableBlog = lazy(() => import('./components/Blog'));
const LoadableStepUp = lazy(() => import('./components/work/StepUp'));

const LoadablePathwaysToHousing = lazy(() => import('./components/work/PathwaysToHousing'));
const LoadableSodaMachine = lazy(() => import('./components/work/SodaMachine'));
const LoadableHabit = lazy(() => import('./components/work/Habit'));
const LoadablePublicTransitSafety = lazy(() => import('./components/work/PublicTransitSafety'));

library.add(fab, fas, far);

class App extends Component {
  componentDidMount() {
    document.title = "Chinmay Joshi | Website";
    this.initiateMouseMove();
  }

  initiateMouseMove() {
    let mouseX = 0, mouseY = 0;
    let xp = 0, yp = 0;

    document.getElementsByTagName("body")[0].onmousemove = function (e) {
      mouseX = e.pageX - 30;
      mouseY = e.pageY - 30;
    };

    setInterval(function () {
      const elem = document.getElementById("cursor-follower");

      xp += ((mouseX - xp) / 6);
      yp += ((mouseY - yp) / 6);

      elem.style.left = xp + "px";
      elem.style.top = yp + "px";
    }, 18);
  }

  render() {
    return (
      <div>
        <Route render={({ location }) => (
          <main id="main">
            <span id="cursor-follower"></span>

            <Suspense fallback={<div></div>}>
              <Menu />
              <AnimatePresence key={Math.random()}>
                <Switch location={location} key={location.pathname}>
                  <Route exact path={'/'} component={LoadableHome} />
                  <Route exact path={'/home'} component={LoadableHome} />
                  <Route exact path={'/home1'} component={LoadableHome1} />
                  <Route exact path={'/about'} component={LoadableAbout} />
                  <Route exact path={'/blogs'} component={LoadableBlog} />
                  <Route exact path={"/work/pathways-to-housing"} component={LoadablePathwaysToHousing} />
                  <Route exact path={"/work/accessible-soda-machine"} component={LoadableSodaMachine} />
                  <Route exact path={"/work/habit"} component={LoadableHabit} />
                  <Route exact path={"/work/public-transit-safety"} component={LoadablePublicTransitSafety} />
                  <Route exact path={"/work/step-up"} component={LoadableStepUp} />

                  <Route path="*" component={PageNotFound} />
                </Switch>
              </AnimatePresence>

            </Suspense>
          </main>
        )}/>
      </div>
    );
  }
}

export default App;
