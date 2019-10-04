import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loadable from 'react-loadable';
import Loading from './components/Loading.jsx';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import "./styles/Custom.scss";

const LoadableHome = Loadable({ loader: () => import('./components/Home.jsx'), loading: Loading});

library.add(fab, fas);

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Switch>
          <Route exact path={'/'} component={LoadableHome} />
          <Route path={'/home'} component={LoadableHome} />

          <Route component={LoadableHome} />
        </Switch>
      </div>
    );
  }
}

export default App;
