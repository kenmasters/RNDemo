import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Spinner from './components/loaders/Spinner';
import DrawerNavigation from './router/DrawerNavigation';
import configureStore from './configureStore';

function setup():React.Component {
  class Root extends Component {

    constructor(props) {
      super(props);
      this.store = configureStore();
    }

    render() {
      const { store } = this;

      return !store
        ? <Spinner />
        : <Provider store={this.store}>
          <DrawerNavigation />
        </Provider>
      ;
    }
  }

  return Root;
}

export default setup;