import React from 'react';
import { View, StyleSheet,Text } from "react-native";
import { store } from '@/app/store/store'
import { Provider } from 'react-redux'
import Login from '@/components/authen/login';

export default function Index() {
  return (
    <View style={styles.container}>
        {/*<Provider store={store}>*/}
            <Text>Need check heree </Text>
            <Login />
        {/*</Provider>*/}
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
