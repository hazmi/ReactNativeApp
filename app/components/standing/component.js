import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { styles } from './styles';

import { StandingItem } from '../standing-item/component';
import { StandingHeader } from '../standing-header/component';

export const Standing = () => (
  <View style={styles.container}>
    <View style={styles.title}>
      <Text style={styles.title__text}>
        Premier League 2016/2017
      </Text>
    </View>

    <StandingHeader />

    <StandingItem data={{
        pos: '1',
        played: '1',
        gd: '+2',
        pts: '3'
    }}>Arsenal</StandingItem>
    <StandingItem data={{
        pos: '2',
        played: '1',
        gd: '-2',
        pts: '0'
    }}>Livepool</StandingItem>

  </View>
);
