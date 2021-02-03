import React from 'react'
import { View, TextInput } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"

const SearchBar = () => {
    return (
        <View>
            <View style={{elevation : 10, backgroundColor : "#fff", alignSelf : "center", marginTop : 10,flexDirection : "row", paddingVertical : 5,paddingHorizontal : 20, borderRadius : 50 }}>
            <Icon name ="search" size = {25} style={{color : "#db6612", marginRight : 5 , alignSelf : "center"}}/>
            <TextInput 
            placeholder="Search here by category or Organization"/>
            </View>
        </View>
    )
}

export default SearchBar
