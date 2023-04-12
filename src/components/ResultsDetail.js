import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.containerStyle}>
            <Image 
                style={styles.imageStyle}
                source={{ uri: result.image_url }}
            />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: 15
    },
    imageStyle: {
        width: 250,
        height: 150,
        borderRadius: 5,
        marginBottom: 5
    },
    nameStyle: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default ResultsDetail;