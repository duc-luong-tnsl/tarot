// Base React modules
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


// Project modules
import Providers from './src/navigation'

export default class App extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <Providers/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
