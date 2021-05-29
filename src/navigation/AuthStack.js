import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import { Text } from 'react-native'

import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'

const Stack = createStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            headerMode='none'
        >
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Signup' component={SignupScreen}/>
        </Stack.Navigator>
    )
}

export default AuthStack


