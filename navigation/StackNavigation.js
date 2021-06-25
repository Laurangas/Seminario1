import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screen/Home";
import Profile from "../screen/Profile";
import Files from "../screen/Files";
import Backups from "../screen/Backups";
import Offlice from "../screen/Offlice";
import Recent from "../screen/Recent";
import Settings from "../screen/Settings";
import Share from "../screen/Share";
import Starred from "../screen/Starred";
import Trash from "../screen/Trash";
import Uploads from "../screen/Uploads";

import NewsFeed from "../screen/NewsFeed";
import Requests from "../screen/Requests";
import Messages from "../screen/Messages";
import Notifications from "../screen/Notifications";
import More from "../screen/More";


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Home" component={Home} />
      
    </Stack.Navigator>
  );
};

const FilesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Files" component={Files} />
    </Stack.Navigator>
  );
};

const BackupsStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Backups" component={Backups} />
      </Stack.Navigator>
    );
  };

const OffliceStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Offlice" component={Offlice} />
    </Stack.Navigator>
  );
};  

const RecentStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Recent" component={Recent} />
      </Stack.Navigator>
    );
  };

const SettingsStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    );
  };

const ShareStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Share" component={Share} />
      </Stack.Navigator>
    );
  };

const StarredStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Starred" component={Starred} />
    </Stack.Navigator>
  );
};

const TrashStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Trash" component={Trash} />
      </Stack.Navigator>
    );
};

const UploadsStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Uploads" component={Uploads} />
      </Stack.Navigator>
    );
};
const NewsFeedStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="NewsFeed" component={NewsFeed} />
      </Stack.Navigator>
    );
};

const RequestsStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Requests" component={Requests} />
      </Stack.Navigator>
    );
};

const MessagesStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="messages" component={Messages} />
      </Stack.Navigator>
    );
}; 

const NotificationsStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    );
};

const MoreStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="More" component={More} />
      </Stack.Navigator>
    );
};


export { MainStackNavigator, FilesStackNavigator, BackupsStackNavigator,
    OffliceStackNavigator,
    RecentStackNavigator,
    SettingsStackNavigator,
    ShareStackNavigator,
    StarredStackNavigator,
    TrashStackNavigator,
    UploadsStackNavigator,
    NewsFeedStackNavigator, RequestsStackNavigator, MessagesStackNavigator,
NotificationsStackNavigator, MoreStackNavigator
     };