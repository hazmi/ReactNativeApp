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


function syncStandingWithAPI(dispatch){
  fetch('https://api.football-data.org/v1/competitions/426/leagueTable')
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      json.standing.map((club) => {
        dispatch( StandingAction.addClub(
          club.position,
          club.teamName,
          club.playedGames,
          club.goalDifference,
          club.points
        ) );
      });
    }).catch(function(ex) { });
}

function syncStandingData() {  
  return (dispatch) => {
    syncStandingWithAPI(dispatch);
  };
}

store.dispatch(syncStandingData());
