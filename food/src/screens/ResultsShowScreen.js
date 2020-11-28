import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`${id}`);
        setResult(response.data);
    }

    useEffect(() => { getResult(id) }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => <Image
                    style={styles.image}
                    source={{ uri: item }} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        marginTop: 5
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 5
    }
});

export default ResultsShowScreen;