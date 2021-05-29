import React, { useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
// import auth from '@firebase/auth'
// import auth from '@react-native-firebase/auth';

import firebase from '../firebase'

// Project components
import AuthStack from './AuthStack'
import { AuthContext } from './AuthProvider'
import HomeScreen from '../screens/HomeScreen'
import Loading from '../components/Loading';

const Routers = () => {

    // Load context 
    const {user, setUser} = useContext(AuthContext)

    // Load state
    const [loading, setLoading] = useState(true)
    const [initializing, setInitializing] = useState(true)


    // Funcion handle when user is set then stop loading effect
    function onAuthStateChange(user) {
        setUser(user)
        if (initializing) setInitializing(false);
        setLoading(false)
    }

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChange);
        return subscriber; // unsubscribe on unmount
      }, []);

    if (loading) return <Loading/>;

    return (
        <NavigationContainer>
           {user ? <HomeScreen/> : <AuthStack/>}
        </NavigationContainer>
    )
}

export default Routers