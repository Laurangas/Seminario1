import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Profile = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>Profile screen {'/n'}</Text>
      <Button
        title="Home Screen"
        onPress={() => navigation.navigate("Home")} // We added an onPress event which would navigate to the About screen
      />
      
      <Button
        title="File Screen"
        onPress={() => navigation.navigate("Files")} // We added an onPress event which would navigate to the About screen
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

export default Profile;