// ./screens/Backups.js
import React from "react";
import { View, StyleSheet, Text } from "react-native";
const Backups = () => {
  return (
    <View style={styles.center}>
      <Text>This is the Backups screen</Text>
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
export default Backups;