import React, { PropTypes } from 'react';
import RN from 'react-native';

import { styles } from './styles';

const {
  Text,
  View,
} = RN;

export const StandingItem = ({ data, children }) => (
  <View style={styles.club}>
    <Text style={styles.club__pos}>{ data.pos }</Text>
    <Text style={styles.club__name}>{ children }</Text>
    <Text style={styles.club__played}>{ data.played }</Text>
    <Text style={styles.club__gd}>{ data.gd }</Text>
    <Text style={styles.club__pts}>{ data.pts }</Text>
  </View>
);

StandingItem.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};

export default StandingItem;
