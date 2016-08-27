import { connect } from 'react-redux';
import Component from './component';

export const mapStateToProps = (state) => {
  return {
    standing: state.standing
  }
}

export const Standing = connect(
  mapStateToProps
)(Component)

export default Standing;

