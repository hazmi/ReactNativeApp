import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import standing from './components/standing/reducer';

const reducers = combineReducers({
  standing,
});

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;
