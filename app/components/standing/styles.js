import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  titleWrapper: {
    flex: 1,
    flexDirection: 'row',
    height: 64,
    paddingTop: 24,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    borderBottomWidth: 1,
    backgroundColor: '#e90052'
  },
  title: {
    flex: 1,
  },
  title__text: {
    paddingTop: 7,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  refreshButton: {
    paddingTop: 7,
    paddingLeft: 7,
    paddingRight: 7,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 1,
    borderRadius: 3
  },
  refreshText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold"
  },
  refreshDisabled: {
    color: 'rgba(255,255,255,0.5)'
  }
});

export default styles;
