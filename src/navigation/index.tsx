import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
require('react-native-gesture-handler');
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Orientation from 'react-native-orientation-locker';

import HomePage from 'screens/HomePage';
import GameChoice from 'screens/GameChoice';
import GameSettings from 'screens/GameSettings';
import TeamVerification from 'screens/TeamVerification'
import SoloSettings from 'screens/SoloSettings';
import Rules from 'screens/Rules';
import TeamGame from 'screens/TeamGame';
import SoloGame from 'screens/SoloGame';
import WordSelection from 'screens/WordSelection';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();

/**
 * Dashboard Screens
 */

const HomeNavigationContainer = () => {
  useEffect(() => {
    Orientation.lockToPortrait();
    BackHandler.addEventListener('hardwareBackPress', () => true)
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', () => true)
  }, []);

  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="Home" component={HomePage} />
      <HomeStack.Screen name="GameChoice" component={GameChoice} />
      <HomeStack.Screen name="GameSettings" component={GameSettings} />
      <HomeStack.Screen name="TeamVerification" component={TeamVerification} />
      <HomeStack.Screen name="SoloSettings" component={SoloSettings} />
      <HomeStack.Screen name="Rules" component={Rules} />
      <HomeStack.Screen name="TeamGame" component={TeamGame} />
      <HomeStack.Screen name="SoloGame" component={SoloGame} />
      <HomeStack.Screen name="WordSelection" component={WordSelection} />
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
