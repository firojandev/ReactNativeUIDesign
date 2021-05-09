import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

function DetailScreen({navigation}) {
    return (
        <View style={styles.home}>
            <Text>Details Screen</Text>

            <Button title="Back" onPress= { () => navigation.goBack() } />
            
        </View>
    );
}

export default DetailScreen;