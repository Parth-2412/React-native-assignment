import React from 'react';
import { View, Text } from 'react-native';
import  MapView , {Marker} from "react-native-maps";

const Map = ({latitude , longitude}) => {
    return (
        <MapView 
          style={{width : "90%", height : "90%" , alignSelf : "center"}}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
            <Marker
            coordinate = {{
                latitude,
                longitude
            }}/>
        </MapView>
    )
}

export default Map;
