import React from 'react';
import { View, StyleSheet,Text } from "react-native";
import { store } from 'store'
import { Provider } from 'react-redux'

export default function Index() {
  return (
    <View style={styles.container}>
        <Provider store={store}>
            <Text>Need check here </Text>
        </Provider>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
      backgroundColor: 'lightblue',
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  }
})
