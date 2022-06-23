import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import Menu from './components/Menu';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';

import "./styles/Styles.scss";

const LoadableHome = lazy(() => import('./components/Home'));
const LoadableBlog = lazy(() => import('./components/Blog'));
const LoadableStepUp = lazy(() => import('./components/work/StepUp'));
const LoadableNextiva = lazy(() => import('./components/work/Nextiva'));

const LoadablePathwaysToHousing = lazy(() => import('./components/work/PathwaysToHousing'));
const LoadableSodaMachine = lazy(() => import('./components/work/SodaMachine'));
const LoadablePublicTransitSafety = lazy(() => import('./components/work/PublicTransitSafety'));

library.add(fab, fas, far);

class App extends Component {
  componentDidMount() {
    document.title = "Chinmay Joshi | Website";
  }

  render() {
    return (
      <div class="container">
        <main>
          <Route render={({ location }) => (
            <Suspense fallback={<div></div>}>
              <AnimatePresence exitBeforeEnter initial={false} key={Math.random()}>
                <Menu />

                <Switch location={location} key={location.pathname}>
                  <Route exact path={'/'} component={LoadableHome} />
                  <Route exact path={'/home'} component={LoadableHome} />
                  <Route exact path={'/blogs'} component={LoadableBlog} />

                  <Route exact path={"/work/nextiva"} component={LoadableNextiva} />
                  <Route exact path={"/work/pathways-to-housing"} component={LoadablePathwaysToHousing} />
                  <Route exact path={"/work/accessible-soda-machine"} component={LoadableSodaMachine} />
                  <Route exact path={"/work/public-transit-safety"} component={LoadablePublicTransitSafety} />
                  <Route exact path={"/work/step-up"} component={LoadableStepUp} />

                  <Route path="*" component={PageNotFound} />
                </Switch>
              </AnimatePresence>

              <Footer />
            </Suspense>
          )} />
        </main>
      </div>
    );
  }
}

export default App;
