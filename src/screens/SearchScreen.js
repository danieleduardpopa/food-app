import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    if (!results.length) {
        return null;
    }
        
    return (
        <>
            <SearchBar 
                searchTerm={searchTerm}
                onTermChange={setSearchTerm}
                onTermSubmit={() => searchApi(searchTerm)}
            />
            {
                errorMessage
                ? (<Text>{errorMessage}</Text>) 
                : null
            }
            <Text style={{ marginBottom: 10, marginLeft: 15 }}>
                We have found {results.length} results for {results[1].location.city}
            </Text>
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')}
                    title='Cost Effective'
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')}
                    title='Bit Pricier'
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')}
                    title='Big Spender'
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    
});

export default SearchScreen;