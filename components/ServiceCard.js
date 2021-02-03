import React , { useState, useEffect } from 'react'
import { Text , Dimensions } from "react-native";
import { Card, Button } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialIcons"
import AntIcon from "react-native-vector-icons/AntDesign"
import { Rating } from "react-native-ratings";
import locations from "../api/locations";

const { width } = Dimensions.get('window');
const marginHorizontal = 5;
const cardWidth = width/2 - 10 - (marginHorizontal * 2);

const ServiceCard = ({service , openMap , setLocation}) => {
    const [[latitude, longitude] , setLatLng] = useState([null,null])
    useEffect(() => {
        const {latitude , longitude}  = locations[service["Name"]];
        setLatLng([latitude , longitude])
    } , [])
    return (
            <Card style={{ width : cardWidth , marginTop : 10 , marginHorizontal , elevation : 5}}>
                <Card.Title title = {""} right={(props) => <Icon {...props} name="info-outline" />} />
                <Card.Cover source={{ uri: 'https://picsum.photos/200' }} />
                <Card.Content style={{marginTop : 10}}>
                    <Text style={{fontSize  : 10, color : "grey"}}>
                        Category: {service["Category"]}
                        {"\n"}
                        Name: {service["Name"]}
                        {"\n"}
                        Nearest(in Km): {service["Nearest"]}
                        {"\n"}
                        Ratings: <Rating
                                    readonly
                                    imageSize={10}
                                    startingValue={parseFloat(service["Ratings"])}
                                    />
                    </Text>
                </Card.Content>
                <Card.Actions>
                    <Button uppercase={false} style={{marginLeft : "auto"}} onPress = {() => {
                        setLocation([latitude,longitude])
                        openMap()
                    }}>
                        <Text style={{color : "grey"}}>
                            Book now 
                            <AntIcon name="right"/>
                        </Text>
                    </Button>
                </Card.Actions>
            </Card>
    )
}

export default ServiceCard
