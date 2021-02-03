import React , { useState } from 'react';
import {  Dimensions , Text, View} from 'react-native';
import { TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Icon from "react-native-vector-icons/FontAwesome5";
import MUIcon from "react-native-vector-icons/MaterialIcons"
import FAIcon from "react-native-vector-icons/FontAwesome"
import HomeScreen from "./HomeScreen";
import OtherScreen from "./OtherScreen"

const initialLayout = { width: Dimensions.get('window').width };

const TicketScreen = () => <OtherScreen text="Ticket"/>
const DirectoryScreen = () => <OtherScreen text="Directory"/>
const FavouriteScreen = () => <OtherScreen text="Favourite"/>
const MoreScreen = () => <OtherScreen text="More"/>

const getTabButtonIcon = (key,focused) => {
    const color = focused ? "white" : "#d9d9d7"
    let icon;
    switch(key){
        case "home":
            icon = <Icon name = "home" size={45} color={color} /> 
            break;
        case "directory":
            icon = <Icon name = "folder" size={45} color={color} /> 
            break;
        case "ticket":
            icon = <FAIcon name = "ticket" size={45} color={color} /> 
            break;
        case "favourite":
            icon = <Icon name = "heart" size={45} color={color} /> 
            break;
        case "more":
            icon = <MUIcon name="menu" size = {45} color={color}/>
            break;
    }
    return icon;
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
        {
            key : "ticket",
            title : "Ticket"
        },
        {
            key : "favourite",
            title : "Favourite"
        },
        {
            key : "more",
            title : "More"
        },
    ])
    const renderScene = SceneMap({
        directory : DirectoryScreen,
        ticket : TicketScreen,
        home : HomeScreen,
        favourite : FavouriteScreen,
        more : MoreScreen
      });
    return (
        <TabView
            tabBarPosition={"bottom"}
            renderTabBar={props => (
                <TabBar 
                    {...props} 
                    indicatorStyle={{ backgroundColor: 'black', height : 5, top : 0 }}
                    renderLabel={ ({route , focused}) => (
                        <View style={{alignItems: "center"}}>
                            {getTabButtonIcon(route.key, focused)}
                            {/* <Icon name = {getTabButtonIconName(route.key, focused)} size={45} color="white" /> */}
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

