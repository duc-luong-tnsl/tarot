import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Title } from 'react-native-paper'
import { TextInput } from 'react-native-gesture-handler';

// Project components
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput'
import Loading from '../components/Loading'


function LoginScreen({ navigation }){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                onPress={() => {
                    console.log("Login")
                }}
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