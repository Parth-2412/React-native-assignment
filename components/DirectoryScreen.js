import React from 'react'
import { Text,StyleSheet, View} from 'react-native';

function DirectoryScreen() {
    return (
        <View style={styles.container}>
            <Text>Directory</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
      backgroundColor: '#fff',
    },
});

export default DirectoryScreen;
