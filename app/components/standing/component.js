import React, { Component, PropTypes } from 'react';
import RN from 'react-native';

import { StandingItem } from '../standing-item/component';
import { StandingHeader } from '../standing-header/component';
import { styles } from './styles';

const {
  ScrollView,
  Text,
  View,
  StatusBar,
  TouchableHighlight,
} = RN;

export class Standing extends Component {
  componentDidMount() {
    this.props.updateClubs();
  }

  render() {
    const { standing, updateRefreshState, updateClubs } = this.props;
    const refreshStyle = [styles.refreshText];
    if (standing.isRefreshing) {
      refreshStyle.push(styles.refreshDisabled);
    }

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#e90052"
          barStyle="light-content"
        />
        <View>
          <View style={styles.titleWrapper}>
            <View style={styles.title}>
              <Text style={styles.title__text}>
                {standing.title}
              </Text>
            </View>
            <View style={styles.refreshButton}>
              <TouchableHighlight
                onPress={() => {
                  updateRefreshState(true);
                  updateClubs();
                }}
              >
                <Text style={refreshStyle}>Refresh</Text>
              </TouchableHighlight>
            </View>
          </View>
          <StandingHeader />
        </View>
        <ScrollView>
          {standing.clubs.map((club) => (
            <StandingItem
              key={`club-${club.name}`}
              data={{
                pos: club.pos,
                played: club.played,
                gd: club.gd,
                pts: club.pts,
              }}
            >
              {club.name}
            </StandingItem>
          ))}
        </ScrollView>
      </View>
    );
  }
}

Standing.propTypes = {
  standing: PropTypes.object.isRequired,
  updateRefreshState: PropTypes.func.isRequired,
  updateClubs: PropTypes.func.isRequired,
};

export default Standing;
