import React from 'react'
import { Text,StyleSheet, View, ScrollView} from 'react-native';
import data from "../api/data";
import Category from "./Category"

function HomeScreen() {
    return (
        <ScrollView>
            <View style={[styles.container , {marginLeft : 10}]}>
                {
                    Object.keys(data).map(category => (
                        <Category key={category} category={category}/>
                    ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      alignItems : 'stretch',
      justifyContent : 'center',
    },
});

export default HomeScreen;
