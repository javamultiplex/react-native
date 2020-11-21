import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle} />
            <View style={styles.viewTwoStyle} />
            <View style={styles.viewThreeStyle} />
        </View>
    );
}

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height:200
    },
    viewOneStyle: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        marginTop:50
    },
    viewThreeStyle: {
        width: 50,
        height: 50,
        backgroundColor: 'blue'
    }
});

export default BoxScreen;