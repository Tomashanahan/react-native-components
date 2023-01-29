import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home.screen';
import Animation101 from '../screens/Animation101.screen';
import Animation102 from '../screens/Animation102.screen';
import SwitchComponent from '../screens/Switch.screen';
import AlertComponent from '../screens/Alert.screen';

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Animation101" component={Animation101} />
      <Stack.Screen name="Animation102" component={Animation102} />
      <Stack.Screen name="SwitchComponent" component={SwitchComponent} />
      <Stack.Screen name="AlertComponent" component={AlertComponent} />
    </Stack.Navigator>
  );
}
