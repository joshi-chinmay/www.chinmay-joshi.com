import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Loadable from 'react-loadable';

import Loading from './components/Loading';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import Menu from './components/Menu';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';

import "./styles/Styles.scss";

const LoadableHome = Loadable({ loader: () => import('./components/Home'), loading: Loading});
const LoadableAbout = Loadable({ loader: () => import('./components/About'), loading: Loading});
const LoadableBlog = Loadable({ loader: () => import('./components/Blog'), loading: Loading});
const LoadableStepUp = Loadable({ loader: () => import('./components/work/StepUp'), loading: Loading});

const LoadablePathwaysToHousing = Loadable({ loader: () => import('./components/work/PathwaysToHousing'), loading: Loading});
const LoadableSodaMachine = Loadable({ loader: () => import('./components/work/SodaMachine'), loading: Loading});
const LoadableHabit = Loadable({ loader: () => import('./components/work/Habit'), loading: Loading});
const LoadablePublicTransitSafety = Loadable({ loader: () => import('./components/work/PublicTransitSafety'), loading: Loading});

library.add(fab, fas, far);

class App extends Component {
  componentDidMount() {
    document.title = "Chinmay Joshi | Website";
  }

  render() {
    return (
      <div className="grand-parent-container">
        <Menu />

        <Route render={({ location }) => (
          <main className="container-fluid">
            <Switch location={location}>
              <Route exact path={'/'} component={LoadableHome} />
              <Route exact path={'/home'} component={LoadableHome} />
              <Route exact path={'/about'} component={LoadableAbout} />
              <Route exact path={'/blogs'} component={LoadableBlog} />
              <Route exact path={"/work/pathways-to-housing"} component={LoadablePathwaysToHousing} />
              <Route exact path={"/work/accessible-soda-machine"} component={LoadableSodaMachine} />
              <Route exact path={"/work/habit"} component={LoadableHabit} />
              <Route exact path={"/work/public-transit-safety"} component={LoadablePublicTransitSafety} />
              <Route exact path={"/work/step-up"} component={LoadableStepUp} />

              <Route path="*" component={PageNotFound} />
            </Switch>
          </main>
        )}/>

      <Footer />
      </div>
    );
  }
}

export default App;
