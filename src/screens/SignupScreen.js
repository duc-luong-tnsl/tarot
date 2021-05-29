// React libraries
import React, { useState, useContext } from 'react'
import { StyleSheet, View,  Text } from 'react-native'
import { IconButton, Title } from 'react-native-paper'


// Project module
import Loading from '../components/Loading'
import FormInput from '../components/FormInput'
import FormButton  from '../components/FormButton'

import { AuthContext } from '../navigation/AuthProvider'


function SignupScreen({ navigation }) {
  const [displayName, setDisplayName] = useState('')
  const [emmail, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Inject authentication context of this user into screen
  const { signup, loading, errMessage } = useContext(AuthContext);

  // Check if loading then show loading icon
  if (loading) {
    return <Loading/>
  }

  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Let's get started!</Title>
      <FormInput
        placeholder='Display Name'
        value={displayName}
        autoCapitalize='none'
        onChangeText={(userDisplayName) => setDisplayName(userDisplayName)}
      />
      <FormInput 
        placeholder='Email'
        keyboardType='email-address'
        onChangeText={(userEmail) => setEmail(userEmail)}
      />
      <FormInput 
        placeholder='Password'
        keyboardType='email-address'
        autoCompleteType='password'
        secureTextEntry={true}
        onChangeText={userPassword => setPassword(userPassword)}
      />
      <FormButton
        title='Signup'
        modeValue='contained'
        style={styles.loginButtonLabel}
        onPress={() => signup(displayName, emmail, password)}
      />
      <Text
        title={() => errMessage}
      />
      <IconButton
            icon="keyboard-backspace"
            size={30}
            style={styles.navButton}
            color="#5b3a70"
            onPress={() => navigation.goBack()}
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
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10
  },
  loginButtonLabel: {
    fontSize: 22
  },
  navButtonText: {
    fontSize: 18
  },
  navButton: {
    marginTop: 10
  }
})

export default SignupScreen