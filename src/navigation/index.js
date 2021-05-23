import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

// Project components
import Router from './Router'

const Providers = () => {
    return (
        <PaperProvider theme={theme}>
            <Router/>
        </PaperProvider>
    )
}

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#5b3a70',
        accent: '#50c878',
        background: '#f7f9fb',
    }
}


export default  Providers