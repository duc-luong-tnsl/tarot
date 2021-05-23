import { NavigationContainer } from '@react-navigation/native'
import React from 'react';

// Project components
import AuthStack from './AuthStack'

const Routers = () => {
    return (
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    )
}

export default Routers