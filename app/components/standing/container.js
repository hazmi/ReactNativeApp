import { connect } from 'react-redux';
import Component from './component';
import { updateTitle, addClub, updateRefreshState, clearClubs } from './action';

function syncStandingWithAPI(dispatch){
  fetch('https://api.football-data.org/v1/competitions/426/leagueTable')
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      dispatch( updateTitle( json.leagueCaption ) );
      dispatch( clearClubs() );

      json.standing.map((club) => {
        dispatch( addClub(
          club.position,
          club.teamName,
          club.playedGames,
          club.goalDifference,
          club.points
        ) );
      });

      dispatch( updateRefreshState( false ) );
    }).catch(function(ex) { });
}

function syncStandingData() {
  return (dispatch) => {
    syncStandingWithAPI(dispatch);
  };
}

export const mapStateToProps = ( state ) => {
  return {
    standing: state.standing
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    updateClubs: () => {
      dispatch( syncStandingData() )
    },
    updateRefreshState: ( isRefreshing ) => {
      dispatch( updateRefreshState( isRefreshing ) )
    }
  }
}

export const Standing = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Standing;

