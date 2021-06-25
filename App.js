// ./App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./navigation/TabNavigator";
import DrawerNavigator from "./navigation/DrawerNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
};
export default App;