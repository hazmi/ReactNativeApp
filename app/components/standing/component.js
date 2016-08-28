import React, { Component } from 'react';
import RN from 'react-native';

import StandingItem from '../standing-item/component';
import StandingHeader from '../standing-header/component';
import styles from './styles';

const { 
  ScrollView,
  Text,
  View,
  StatusBar,
  TouchableHighlight
} = RN;

export class Standing extends Component {
  componentDidMount() {
    this.props.updateClubs();
  }

  render() {
    let { standing, updateRefreshState, updateClubs } = this.props;
    let refreshStyle = [styles.refreshText];
    if( standing.isRefreshing ) {
      refreshStyle.push( styles.refreshDisabled );
    }

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View>
          <View style={ styles.titleWrapper }>
            <View style={ styles.title }>
              <Text style={ styles.title__text }>
                { standing.title }
              </Text>
            </View>
            <View style={ styles.refreshButton }>
              <TouchableHighlight onPress={ () => {
                  updateRefreshState( true );
                  updateClubs();
                }}>
                <Text style={ refreshStyle }>Refresh</Text>
              </TouchableHighlight>
            </View>
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
