
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { FilesStackNavigator, BackupsStackNavigator,
    OffliceStackNavigator,
    RecentStackNavigator,
    SettingsStackNavigator,
    ShareStackNavigator,
    StarredStackNavigator,
    TrashStackNavigator,
    UploadsStackNavigator } from "./StackNavigation";
import TabNavigator from "./TabNavigator";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={TabNavigator}
        options={{
            drawerLabel: 'Profile',
            drawerIcon: ({ color = 'black', size=23 }) => (
              <AntDesign name="user" color={color} size={size} />
            ),
        }}
      />
      <Drawer.Screen name="Files" component={FilesStackNavigator} 
        options={{
            drawerLabel: 'My Files',
            drawerIcon: ({ color = 'black', size=23 }) => (
              <Ionicons name="folder" color={color} size={size} />
            ),
        }}
      
      
      />
      <Drawer.Screen name="Backups" component={BackupsStackNavigator} 
        options={{
            drawerLabel: 'Backups',
            drawerIcon: ({ color = 'black', size=23 }) => (
              <Ionicons name="cloud-upload" color={color} size={size} />
            ),
          }}  
      />
      <Drawer.Screen name="Offlice" component={OffliceStackNavigator} 
        options={{
            drawerLabel: 'Offline',
            drawerIcon: ({ color = 'black', size=23 }) => (
              <Ionicons name="cloud-offline" color={color} size={size} />
            ),
          }}
      />
      <Drawer.Screen name="Recent" component={RecentStackNavigator} 
        options={{
            drawerLabel: 'Recent',
            drawerIcon: ({ color = 'black', size=23 }) => (
              <Ionicons name="ios-time-outline" color={color} size={size} />
            ),
          }}
      />
      <Drawer.Screen name="Settings" component={SettingsStackNavigator} 
        options={{
            drawerLabel: 'Settings & Account',
            drawerIcon: ({ color = 'black', size=23 }) => (
              <Ionicons name="settings-sharp" color={color} size={size} />
            ),
          }}
      />
      <Drawer.Screen name="Share" component={ShareStackNavigator}
        options={{
            drawerLabel: 'Shared With Me',
            drawerIcon: ({ color = 'black', size=23 }) => (
              <Ionicons name="people" color={color} size={size} />
            ),
        }}
      />
      <Drawer.Screen name="Starred" component={StarredStackNavigator} 
         options={{
            drawerLabel: 'Starred',
            drawerIcon: ({ color = 'black', size=23 }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
      />
      <Drawer.Screen name="Trash" component={TrashStackNavigator} 
        options={{
            drawerLabel: 'Trash',
            drawerIcon: ({ color = 'black', size=23 }) => (
              <Ionicons name="trash-bin-sharp" color={color} size={size} />
            ),
          }}
      />
      <Drawer.Screen name="Uploads" component={UploadsStackNavigator} 
        options={{
            drawerLabel: 'Uploads',
            drawerIcon: ({ color = 'black', size=23 }) => (
              <Ionicons name="arrow-up-circle" color={color} size={size} />
            ),
          }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;