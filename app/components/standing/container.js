/* eslint arrow-parens: 0 */

import { connect } from 'react-redux';
import { fetch } from 'fetch';
import Component from './component';
import { updateTitle, addClub, updateRefreshState, clearClubs } from './action';

function syncStandingWithAPI(dispatch) {
  fetch('https://api.football-data.org/v1/competitions/426/leagueTable')
    .then((response) => response.json())
    .then((json) => {
      dispatch(updateTitle(json.leagueCaption));
      dispatch(clearClubs());

      json.standing.map((club) =>
        dispatch(addClub(
          club.position,
          club.teamName,
          club.playedGames,
          club.goalDifference,
          club.points
        ))
      );

      dispatch(updateRefreshState(false));
    }).catch(() => {});
}

function syncStandingData() {
  return (dispatch) => {
    syncStandingWithAPI(dispatch);
  };
}

export const mapStateToProps = (state) => ({
  standing: state.standing,
});


const mapDispatchToProps = (dispatch) => ({
  updateClubs: () => {
    dispatch(syncStandingData());
  },
  updateRefreshState: (isRefreshing) => {
    dispatch(updateRefreshState(isRefreshing));
  },
});

export const Standing = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Standing;
