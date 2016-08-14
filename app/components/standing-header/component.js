import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { styles } from './styles';

export class StandingHeader extends Component {
  render() {
    let { name } = this.props;
    return (
      <View style={styles.club}>
        <Text style={styles.club__pos}>Pos</Text>
        <Text style={styles.club__name}>Club</Text>
        <Text style={styles.club__played}>Pl</Text>
        <Text style={styles.club__gd}>GD</Text>
        <Text style={styles.club__pts}>Pts</Text>
      </View>
    );
  }
}
