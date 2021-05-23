import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Title } from 'react-native-paper'
import { TextInput } from 'react-native-gesture-handler';

// Project components
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput'
import Loading from '../components/Loading'


class LoginScreen extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleUserName = name => {
        this.setState({name})
    }

    handleUserPassword = password => {
        this.setState({password})
    }

    handleLogin = () => {
        console.log('Submit')
    }

    handleSignUp = () => {
        console.log('Sign Up')
    }

    handleEmailChange = (email) => {
        this.setState({email: email})
    }

    handlePasswordChange = () => {
        this.setState({email: email})

    }

    render() {
        return (
            <View style={style.container}>
                <Title style={style.titleText}>Wellcome Dating App!</Title>

                <Text>{this.state.email}</Text>
                <Text>{this.state.password}</Text>
                <FormInput 
                    placeholder='Email'
                    keyboardType='email-address'
                    onChangeText={this.handleEmailChange}
                />
                <FormInput 
                    placeholder='Password'
                    keyboardType='email-address'
                    autoCompleteType='password'
                    secureTextEntry={true}
                    onChangeText={this.handleEmailChange}

                />
                <FormButton 
                    style={style.loginButtonLabel} 
                    title='Login' 
                    onPress={this.handleLogin}
                />
                <FormButton 
                    title='Sign up here' 
                    onPress={this.handleSignUp}
                />
            </View>
        )
    }
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