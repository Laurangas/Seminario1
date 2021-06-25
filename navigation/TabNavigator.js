// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import { MainStackNavigator, FilesStackNavigator } from "./StackNavigation";

import { MainStackNavigator, NewsFeedStackNavigator, RequestsStackNavigator, MessagesStackNavigator, NotificationsStackNavigator, MoreStackNavigator} from "./StackNavigation";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={MainStackNavigator} 
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color = 'black', size=23 }) => (
              <AntDesign name="user" color={color} size={size} />
            ),
          }}
      />  
      <Tab.Screen name="NewsFeed" component={NewsFeedStackNavigator} 
        options={{
            tabBarLabel: 'NewsFeed',
            tabBarIcon: ({ color = 'black', size=23 }) => (
              <Ionicons name="newspaper" color={color} size={size} />
            ),
          }}
      />
      <Tab.Screen name="Requests" component={RequestsStackNavigator} 
        options={{
            tabBarLabel: 'Request',
            tabBarIcon: ({ color = 'black', size=23 }) => (
              <Ionicons name="people" color={color} size={size} />
            ),
          }}
      />
      <Tab.Screen name="Messages" component={MessagesStackNavigator} 
        options={{
            tabBarLabel: 'Messages',
            tabBarIcon: ({ color = 'black', size=23 }) => (
              <Ionicons name="chatbox" color={color} size={size} />
            ),
          }}
      />
      <Tab.Screen name="Notifications" component={NotificationsStackNavigator} 
        options={{
            tabBarLabel: 'Notifications',
            tabBarIcon: ({ color = 'black', size=23 }) => (
              <Ionicons name="earth" color={color} size={size} />
            ),
          }}
      />
      <Tab.Screen name="More" component={MoreStackNavigator} 
        options={{
            tabBarLabel: 'More',
            tabBarIcon: ({ color = 'black', size=23 }) => (
              <Ionicons name="menu" color={color} size={size} />
            ),
          }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;