import React from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import Tab from "./components/Tab";

export default function App() {
  return (
    <View style={styles.container}>
      <Tab/>
    </View>
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
