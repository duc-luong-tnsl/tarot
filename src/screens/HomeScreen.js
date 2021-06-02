import React, { useContext } from 'react';
import { Title } from 'react-native-paper'
import { View, StyleSheet, TextInput } from 'react-native'

// Project modules
import { APP_NAME } from '../constants'
import FormButton from  '../components/FormButton'
import { AuthContext } from '../navigation/AuthProvider'


import OnboardingScreen from '../screens/OnboardingScreen'

function HomeScreen() {
  
  // Load data from original context
  const {user, logout} = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <OnboardingScreen user={user}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default HomeScreen;
