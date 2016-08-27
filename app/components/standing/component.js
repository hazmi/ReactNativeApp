import React, { Component } from 'react';
import RN from 'react-native';

import StandingItem from '../standing-item/component';
import StandingHeader from '../standing-header/component';
import styles from './styles';

const { 
  ScrollView,
  Text,
  View,
  StatusBar
} = RN;

export class Standing extends Component {
  render() {
    let { standing } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="red"
          barStyle="light-content"
        />
        <View>
          <View style={styles.title}>
            <Text style={styles.title__text}>
              { standing.title }
            </Text>
          </View>
          <StandingHeader />
        </View>
        <ScrollView>
          {standing.clubs.map((club) => {
            return (
              <StandingItem key={ 'club-' + club.name } data={{
                  pos: club.pos,
                  played: club.played,
                  gd: club.gd,
                  pts: club.pts
              }}>{ club.name }</StandingItem>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default Standing;
