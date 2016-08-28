/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry } from 'react-native';
import App from './app/app.js';

console.ignoredYellowBox = [
  // https://github.com/facebook/react-native/issues/9093
  'Warning: You are manually calling a React.PropTypes validation',
];

AppRegistry.registerComponent('ReactNativeApp', () => App);

