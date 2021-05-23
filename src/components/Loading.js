import React from 'react'

import {StyleSheet, View, ActivityIndicator} from 'react-native'


export default class Loading extends React.Component {
    render() {
        return (
            <View style={style.loadingContainer}>
                <ActivityIndicator
                    size="large"
                    color="#5b3a70"
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
})