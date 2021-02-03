import React from 'react'
import { StyleSheet, View, ScrollView} from 'react-native';
import data from "../api/data";
import Category from "./Category"
import SearchBar from "./SearchBar";

function HomeScreen() {
    return (
        <View style={{flex : 1}}>
            <SearchBar/>
            <ScrollView>
                <View style={[styles.container , {marginLeft : 10}]}>
                    {
                        Object.keys(data).map(category => (
                            <Category key={category} category={category}/>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
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
