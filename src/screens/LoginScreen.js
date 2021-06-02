import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native'
import { Title } from 'react-native-paper'

// Project components
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput'


import { AuthContext } from  '../navigation/AuthProvider'


function LoginScreen({ navigation }){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Context
    const { login } = useContext(AuthContext)

    return (
        <View style={style.container}>
            <Title style={style.titleText}>Wellcome Dating App!</Title>
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
                style={style.loginButtonLabel} 
                title='Login' 
                onPress={() => login(email, password)}
            />
            <FormButton 
                title='Sign up here' 
                onPress={() => navigation.navigate("Signup")}
            />
        </View>
    )
}


const style = StyleSheet.create({
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
        fontSize: 16
    }
})


export default LoginScreen