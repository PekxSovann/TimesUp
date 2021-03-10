import React, { useContext } from 'react';
require('react-native-gesture-handler');
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from 'screens/HomePage';
import GameChoice from 'screens/GameChoice';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();

/**
 * Dashboard Screens
 */

const HomeNavigationContainer = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="Home" component={HomePage} />
      <HomeStack.Screen name="GameChoice" component={GameChoice} />
    </HomeStack.Navigator>
  );
};

export const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeNavigationContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
