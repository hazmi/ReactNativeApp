import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  club: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    borderBottomWidth: 1,
    backgroundColor: '#eee',
  },
  club__played: {
    width: 40,
    paddingLeft: 8,
    color: '#38003c',
    textAlign: 'center',
  },
  club__gd: {
    width: 40,
    paddingLeft: 8,
    color: '#38003c',
    textAlign: 'center',
  },
  club__pts: {
    width: 50,
    paddingLeft: 8,
    color: '#38003c',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  club__pos: {
    width: 40,
    color: '#38003c',
    textAlign: 'center',
  },
  club__name: {
    flex: 1,
    color: '#38003c',
  },
});

export default styles;
