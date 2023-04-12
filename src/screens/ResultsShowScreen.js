import React, { useEffect, useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    Image,
    Dimensions 
} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const dimensions = Dimensions.get('window');
    const imageWidth = Math.floor(dimensions.width) - 30;

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    };
    
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{result.name}</Text>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    const dynamicStyle = {
                        height: undefined,
                        width: imageWidth
                    };

                    return (
                        <Image
                            style={[styles.imageStyle, dynamicStyle]} 
                            source={{ uri: item }}
                        />
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        marginVertical: 10,
        marginRight: 15,
        aspectRatio: 75 / 100
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    viewStyle: {
        marginTop: 5,
        marginLeft: 15,
        flex: 1
    }
});

export default ResultsShowScreen;