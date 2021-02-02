import React , { useState } from 'react';
import {  Dimensions , Text, View} from 'react-native';
import { TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Icon from "react-native-vector-icons/FontAwesome5";
import HomeScreen from "./HomeScreen";
import DirectoryScreen from "./DirectoryScreen"

const initialLayout = { width: Dimensions.get('window').width };

const HomeRoute = () => <HomeScreen/>
const DirectoryRoute = () => <DirectoryScreen/>
const getTabButtonIconName = (key,focused) => {
    let name;
    switch(key){
        case "home":
            name = "home"
            break;
        case "directory":
            name = "folder"
            break;
    }
    return name;
}
function Tab() {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key : "home",
            title : "Home"
        },
        {
            key : "directory",
            title : "Directory"
        },
    ])
    const renderScene = SceneMap({
        directory : DirectoryRoute,
        home : HomeRoute 
      });
    return (
        <TabView
            tabBarPosition={"bottom"}
            renderTabBar={props => (
                <TabBar 
                    {...props} 
                    indicatorStyle={{ backgroundColor: 'black', height : 5 }}
                    renderLabel={ ({route , focused}) => (
                        <View style={{alignItems: "center"}}>
                            <Icon name = {getTabButtonIconName(route.key, focused)} size={45} color="white" />
                            <Text style={{fontSize: 10 , color : "white"}}>{route.title}</Text>
                        </View>
                    )}
                    style = {{backgroundColor : "#eb5823",height : 80 }}/>
                )
            }
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
      />
    )
}

export default Tab;

