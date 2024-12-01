import React from 'react';
import { View, StyleSheet } from "react-native";
import { NativeBaseProvider, Text, Box } from "native-base";

export default function Index() {
  return (
    <View style={styles.container}>
        <NativeBaseProvider>
            <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
                <Text>Open up App.js to start working on your app!</Text>
            </Box>
        </NativeBaseProvider>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  }
})
