import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './store';
import Standing from './components/standing/container';
import StandingAction from './components/standing/action';


export default class ReactNativeApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Standing />
      </Provider>
    );
  }
}
