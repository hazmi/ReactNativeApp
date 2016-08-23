import React, { Component } from 'react';
import RN from 'react-native';
import { Provider } from 'react-redux'

import store from './store';
import Standing from './components/standing/container';
import StandingAction from './components/standing/action';

const {
  View,
  StatusBar
} = RN;


export default class ReactNativeApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex:1 } }>
          <StatusBar
            backgroundColor="red"
            barStyle="light-content"
          />
          <Standing />
        </View>
      </Provider>
    );
  }
}

// temporary dummy data
store.dispatch( StandingAction.clearClubs() );
store.dispatch( StandingAction.addClub('1', 'Arsenal', '1', '+3', '3') );
store.dispatch( StandingAction.addClub('2', 'Liverpool', '1', '+2', '1') );
store.dispatch( StandingAction.addClub('3', 'Stoke', '1', '-1', '0') );
