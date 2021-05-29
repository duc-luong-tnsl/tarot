import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'


// Project modules
import HomeScreen from '../screens/HomeScreen'


// Create a stack to handle on home screen
const Stack = createStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen}/>
    </Stack.Navigator>
  )
}
