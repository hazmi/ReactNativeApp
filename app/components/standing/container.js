import { connect } from 'react-redux';
import Component from './component';
import { updateTitle, addClub } from './action';

function syncStandingWithAPI(dispatch){
  console.log('fetch');
  fetch('https://api.football-data.org/v1/competitions/426/leagueTable')
    .then(function(response) {
      console.log('response', response);
      return response.json();
    }).then(function(json) {
      dispatch( updateTitle( json.leagueCaption ) );

      json.standing.map((club) => {
        dispatch( addClub(
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

export const mapStateToProps = (state) => {
  return {
    standing: state.standing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateClubs: () => {
      dispatch( syncStandingData() )
    }
  }
}

export const Standing = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Standing;

