import React from 'react';
import { Title } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'

// Project modules
import FormButton from  '../components/FormButton'
import APP_NAME from '../constants'


export default function HomeScreen() {
  return (
    <View>
      <Title>
          {APP_NAME}
      </Title>
      <FormButton
        modeValue='contained'
        title="Logout"
      />
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