import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    return (
        <View>
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
            <Text>We have found {results.length} results</Text>
            <ResultsList />
            <ResultsList />
            <ResultsList />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;