import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const TextScreen = () => {

    const [name, setName] = useState('');

    return (
        <View>
            <Text>Enter name : </Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={newValue => setName(newValue)} />
            <Text>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen; 