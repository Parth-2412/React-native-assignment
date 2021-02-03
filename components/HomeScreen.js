import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text,  ScrollView} from 'react-native';
import { Modal , Portal } from "react-native-paper";
import Dash from 'react-native-dash';
import Icon from "react-native-vector-icons/MaterialIcons"
import Category from "./Category"
import SearchBar from "./SearchBar";
import Map from "./Map";

function HomeScreen() {
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState({});
    const [[latitude,longitude] , setLocation] = useState([null, null])

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    useEffect(() => {
        fetch("https://run.mocky.io/v3/2b067794-7df5-4b1a-8ea2-c30309349c2b")
        .then(response => response.json())
        .then(result => setData(result))
        setData()
    }, [])
    return (
        <View style={{flex : 1 , marginTop : 15}}>
            <Portal>
                <Modal style={{ justifyContent : "center" }} visible={visible}  onDismiss={hideModal}> 
                    <Map latitude={latitude} longitude={longitude}/>
                </Modal>
            </Portal>
            <View style={{flexDirection : "row" , alignItems : "center"}}>
                <Icon name="location-pin" size = {20} style={{marginHorizontal : 7}}/>
                <View>
                    <Text>
                        Home - Narayan Nagar
                    </Text>
                    <Dash dashThickness={1} />
                </View>
            </View>
            <SearchBar/>
            <ScrollView>
                <View style={[styles.container , {marginLeft : 10}]}>
                    {
                        data && Object.entries(data).map(([category , services])  => (
                            <Category key={category} setLocation={setLocation} openMap={showModal} category={category} services={services}/>
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
