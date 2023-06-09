import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Rubik-Black',
  }
})