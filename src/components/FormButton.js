import React from 'react';
import { Button, StyleSheet, Dimensions, View } from 'react-native'


const { width, height } = Dimensions.get("screen")


const FormButton = props => {
    return (
        <View>
            <Button
                {...props}
            />
        </View> 
    )
}


const style = StyleSheet.create({
    button: {
        marginTop: 10
    },
    buttonContainer: {
        width: width / 2,
        height: height / 2
    }
})

export default FormButton
