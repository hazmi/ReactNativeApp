import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar
} from 'react-native';

import { Standing } from './components/standing/component';

export default class ReactNativeApp extends Component {
  render() {
    return (
      <View style={styles.app}>
        <StatusBar
          backgroundColor="red"
          barStyle="light-content"
        />
        <Standing />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
});
