import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import { Text } from 'react-native'

import LoginScreen from '../screens/LoginScreen'

const Stack = createStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            headerMode='none'
        >
            <Stack.Screen name='Login' component={LoginScreen}/>
        </Stack.Navigator>
    )
}

export default AuthStack


