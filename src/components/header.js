// Import Libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = () => {
    const { textStyle, viewStyle } = styles
    return( 
        <View style = { viewStyle} >
            <Text style = { textStyle } >Albums!</Text>
        </View>    
    )
};

const styles = {

    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: 'black',
        shadowOffset: { widht: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 3,
    },

    textStyle: {
        fontSize: 20,
    }

}

export default Header;
