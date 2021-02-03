import React from 'react'
import { View, TextInput , StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"

const SearchBar = () => {
    return (
        <View>
            <View style={styles.container}>
            {/* <View style={{elevation : 10, backgroundColor : "#fff", alignSelf : "center", marginTop : 12,flexDirection : "row", paddingVertical : 5,paddingHorizontal : 20, borderRadius : 50 }}> 
            <Icon name ="search" size = {25} style={{color : "#db6612", marginRight : 5 , alignSelf : "center"}}/> */}
            <Icon name ="search" size = {25} style={styles.searchIcon} />
            <TextInput 
            placeholder="Search here by category or Organization"/>
            </View>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create(
    {
        container : {
            elevation : 10, 
            backgroundColor : "#fff",
            alignSelf : "center",
            marginTop : 12,
            flexDirection : "row",
            paddingVertical : 5,
            paddingHorizontal : 20, 
            marginBottom : 15,
            borderRadius : 50 ,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
        },
        searchIcon : {
            color : "#db6612", 
            marginRight : 5, 
            alignSelf : "center"
        }
}
)
