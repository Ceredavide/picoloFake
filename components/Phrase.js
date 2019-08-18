import React from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const Phrase = ({text}) => {
    return (
        <View>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text : {
        fontSize: 34
    }
})

export default Phrase