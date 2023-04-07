import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/home/Home';
import Taxi from '../pages/home/taxi/Taxi';
import Profile from '../pages/home/profile/Profile';
import { Icon } from '@rneui/themed';
// import material icons
import MIcon from'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

// create a tab navigator for bottom navigation on the app
const TabNavigator = createBottomTabNavigator();

// export the tab navigator
export const HomeRouteStack = () => {
  return (
    <TabNavigator.Navigator
        initialRouteName='HomePage'
        screenOptions={({route} ) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let iconColor = focused ? 'text-slate-500' : '#000';

            // set the icon name based on the route name
            switch (route.name) {
              case 'HomePage':
                // change the icon name based on the focused state
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Taxi':
                // change the icon name based on the focused state
                iconName = focused ? 'car' : 'car-outline';
                break;
              case 'Profile':
                // change the icon name based on the focused state
                iconName = focused ? 'person' : 'person-outline';
                break;
              default: 
                iconName = 'home';
            }

            // return the icon component
            return <Icon 
                      name={iconName}
                      size={18}
                      type='ionicon'
                    />
          }
        })}
    >
      <TabNavigator.Screen

        name="HomePage"
        options={{}}
        component={Home}
      />
      <TabNavigator.Screen
        name="Taxi"
        component={Taxi}
      />
      <TabNavigator.Screen
        name="Profile"
        component={Profile}
      />
    </TabNavigator.Navigator>
  );
}