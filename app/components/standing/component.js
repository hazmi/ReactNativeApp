import React, { Component } from 'react';
import RN from 'react-native';

import StandingItem from '../standing-item/component';
import StandingHeader from '../standing-header/component';
import styles from './styles';

const { 
  Text,
  View
} = RN;

export class Standing extends Component {
  render() {
    let { standing } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.title__text}>
            Premier League 2016/2017
          </Text>
        </View>
        <StandingHeader />
        {standing.map((club) => {
          return (
            <StandingItem key={ 'club-' + club.pos } data={{
                pos: club.pos,
                played: club.played,
                gd: club.gd,
                pts: club.pts
            }}>{ club.name }</StandingItem>
          );
        })}
      </View>
    );
  }
}

export default Standing;
