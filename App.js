import React from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import { Provider , DefaultTheme } from "react-native-paper";
import Tab from "./components/Tab";

export default function App() {
  const theme = {
    ...DefaultTheme
  };
  return (
    <Provider>
      <View style={styles.container}>
        <Tab/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : 'center',
    backgroundColor: '#fff',
    marginTop : StatusBar.currentHeight
  },
});
