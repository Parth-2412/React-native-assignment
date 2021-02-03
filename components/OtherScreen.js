import React from 'react'
import { Text,StyleSheet, View } from 'react-native';
import Map from "./Map"


function DirectoryScreen({text}) {
    return (
        <View style={styles.container}>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center'
    },
});

export default DirectoryScreen;
