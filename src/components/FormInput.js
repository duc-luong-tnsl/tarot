import React from 'react';
import { StyleSheet, SafeAreaView, TextInput } from 'react-native'


const FormInput = props => {

    return (
        <SafeAreaView>
            <TextInput
                {...props}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  });

export default FormInput