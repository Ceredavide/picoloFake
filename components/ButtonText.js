import React from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';

const ButtonText = ({text, getRandomArbitrary}) => {
    return (
        <TouchableOpacity onPress={() => getRandomArbitrary()} style={styles.button}>
            <Text>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 140,
        backgroundColor: 'red',
        marginTop: 200
    }
})

export default ButtonText