import { createStore, combineReducers } from 'redux'

import standing from './components/standing/reducer';

var reducers = combineReducers({
  standing: standing
});

let store = createStore(
    reducers
);

export default store;

