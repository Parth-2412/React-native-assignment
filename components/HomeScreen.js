import React, { useState } from 'react'
import { StyleSheet, View, Text,  ScrollView} from 'react-native';
import { Modal , Portal } from "react-native-paper";
import data from "../api/data";
import Category from "./Category"
import SearchBar from "./SearchBar";
import Map from "./Map";

function HomeScreen() {
    const [visible, setVisible] = useState(false);
    const [[latitude,longitude] , setLocation] = useState([null, null])
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    return (
        <View style={{flex : 1}}>
            <Portal>
                <Modal style={{ justifyContent : "center" }} visible={visible}  onDismiss={hideModal}> 
                    <Map latitude={latitude} longitude={longitude}/>
                </Modal>
            </Portal>
            <SearchBar/>
            <ScrollView>
                <View style={[styles.container , {marginLeft : 10}]}>
                    {
                        Object.keys(data).map(category => (
                            <Category key={category} setLocation={setLocation} openMap={showModal} category={category}/>
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
