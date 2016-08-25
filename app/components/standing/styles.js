import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 24,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    borderBottomWidth: 1,
    backgroundColor: '#e90052'
  },
  title__text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  }
});

export default styles;
