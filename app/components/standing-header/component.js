import React from 'react';
import RN from 'react-native';

import { styles } from './styles';

const {
  Text,
  View,
} = RN;

export const StandingHeader = () => (
  <View style={styles.club}>
    <Text style={styles.club__pos}>Pos</Text>
    <Text style={styles.club__name}>Club</Text>
    <Text style={styles.club__played}>Pl</Text>
    <Text style={styles.club__gd}>GD</Text>
    <Text style={styles.club__pts}>Pts</Text>
  </View>
);

export default StandingHeader;
