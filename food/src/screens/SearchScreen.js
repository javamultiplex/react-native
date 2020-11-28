import React, { useState } from 'react';
import useResults from '../hooks/useResults';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$ || '$$$'
        return results.filter(result => result.price === price);
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('$')}
                    title="Cost Effective"
                    navigation={navigation} />
                <ResultsList
                    results={filterResultsByPrice('$$')}
                    title="Bit Pricier"
                    navigation={navigation} />
                <ResultsList
                    results={filterResultsByPrice('$$$')}
                    title="Big Spender"
                    navigation={navigation} />
            </ScrollView>
        </>
    );
}


const styles = StyleSheet.create({});

export default SearchScreen;
