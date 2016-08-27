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


function syncStandingWithAPI(dispatch){
  fetch('https://api.football-data.org/v1/competitions/426/leagueTable')
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      dispatch( StandingAction.updateTitle( json.leagueCaption ) );

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
