import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AlertComponent from '../screens/Alert.screen';
import Animation101 from '../screens/Animation101.screen';
import Animation102 from '../screens/Animation102.screen';
import Home from '../screens/Home.screen';
import InfiniteScrollComponent from '../screens/InfiniteScroll.screen';
import ModalComponent from '../screens/Modal.screen';
import PullToRefresh from '../screens/PullToRefresh.screen';
import SectionListComponent from '../screens/SectionList.screen';
import SwitchComponent from '../screens/Switch.screen';
import TextInputComponent from '../screens/TextInput.screen';

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#FFF'}}}
      initialRouteName="Home">
      <Stack.Screen name="AlertComponent" component={AlertComponent} />
      <Stack.Screen name="Animation101" component={Animation101} />
      <Stack.Screen name="Animation102" component={Animation102} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="InfiniteScrollComponent"
        component={InfiniteScrollComponent}
      />
      <Stack.Screen name="ModalComponent" component={ModalComponent} />
      <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
      <Stack.Screen name="SectionList" component={SectionListComponent} />
      <Stack.Screen name="SwitchComponent" component={SwitchComponent} />
      <Stack.Screen name="TextInputComponent" component={TextInputComponent} />
    </Stack.Navigator>
  );
}
