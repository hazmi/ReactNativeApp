import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Standing } from './components/standing/component';

const {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar
} = ReactNative;


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
