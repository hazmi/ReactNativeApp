import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  titleWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
    paddingTop: 24,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    borderBottomColor: '#e27a9f',
    borderBottomWidth: 1,
    backgroundColor: '#e90052'
  },
  title: {
    flex: 1,
  },
  title__text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  refreshButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    paddingLeft: 7,
    paddingRight: 7,
    borderColor: '#e27a9f',
    borderWidth: 1,
    borderRadius: 3
  },
  refreshText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold"
  },
  refreshDisabled: {
    color: '#e27a9f'
  }
});

export default styles;
