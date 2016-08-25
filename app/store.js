import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import standing from './components/standing/reducer';

var reducers = combineReducers({
  standing: standing
});

let store = createStore(
    reducers,
    applyMiddleware( thunk )
);

export default store;

