import React from 'react'
import { View, Text } from 'react-native'
import data from "../api/data";
import ServiceCard from "./ServiceCard";

const Category = ({category , openMap}) => {
    return (
        <View style={{flex : 1 , marginTop : 20}}>
            <Text key={category} style={{fontSize : 30}}>{category}</Text>
            <View style={{flex : 1, flexDirection : "row", flexWrap : "wrap"}}>
                {
                    data[category].map(service => (
                        <ServiceCard openMap={openMap} key = {service["Name"]} service={service}/>
                    ))
                }
            </View>
        </View>
    )
}

export default Category
