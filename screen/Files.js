// ./screens/Files.js

import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
const Files = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the Files screen</Text>
    
      <Button
        title="Profile Screen"
        onPress={() => navigation.navigate("Profile")} // We added an onPress event which would navigate to the About screen
      />
    </View>
  );
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
export default Files;