/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import IntroductionPage from './src/pages/intro/IntroductionPage';
import Home from './src/pages/home/Home';
import SignUp from './src/pages/auth/signup/SingUp';
import Login from './src/pages/auth/login/Login';
import { HomeRouteStack } from './src/router/AppRouter';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// create app stack router for navigation
const StackRouter = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackRouter.Navigator>
          <StackRouter.Screen
            options={{
              headerShown: false,
              statusBarHidden: true,
            }}
            name="WelcomeScreen"
            component={IntroductionPage}
          />
          <StackRouter.Screen
            options={{headerShown: false}}
            name="Home"
            component={HomeRouteStack}
          />
          <StackRouter.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
          <StackRouter.Screen
            options={{headerShown: false}}
            name="SignUp"
            component={SignUp}
          />
        </StackRouter.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
