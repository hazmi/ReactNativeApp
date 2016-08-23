import React, { Component } from 'react';
import RN from 'react-native';

import styles from './styles';

const { 
  Text,
  View
}  = RN;

export class StandingItem extends Component {
  render() {
    let { pos, played, gd, pts } = this.props.data;

    return (
      <View style={styles.club}>
        <Text style={styles.club__pos}>{ pos }</Text>
        <Text style={styles.club__name}>{ this.props.children }</Text>
        <Text style={styles.club__played}>{ played }</Text>
        <Text style={styles.club__gd}>{ gd }</Text>
        <Text style={styles.club__pts}>{ pts }</Text>
      </View>
    );
  }
}

export default StandingItem;
