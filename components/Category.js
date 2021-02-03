import React from 'react'
import { View, Text } from 'react-native'
import ServiceCard from "./ServiceCard";

const Category = ({services ,category,  openMap , setLocation}) => {
    return (
        <View style={{flex : 1 , marginTop : 20}}>
            <Text style={{fontSize : 30}}>{category}</Text>
            <View style={{flex : 1, flexDirection : "row", flexWrap : "wrap"}}>
                {
                    services.map(service => (
                        <ServiceCard openMap={openMap} setLocation={setLocation} key = {service["Name"]} service={service}/>
                    ))
                }
            </View>
        </View>
    )
}

export default Category
