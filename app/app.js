import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { Standing } from './components/standing/container';

export const ReactNativeApp = () => (
  <Provider store={store}>
    <Standing />
  </Provider>
);

export default ReactNativeApp;
