import React from 'react'
import { Text,StyleSheet, View } from 'react-native';
import Map from "./Map"


function DirectoryScreen() {
    return (
        // <View style={styles.container}>
        //     <Text>Directory</Text>
        // </View>
        <Map latitude={18.51957} longitude={73.85535}/>
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
