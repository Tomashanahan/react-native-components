import React, {useContext} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeContext} from '../context/Theme/Theme.context';

import AlertComponent from '../screens/Alert.screen';
import Animation101 from '../screens/Animation101.screen';
import Animation102 from '../screens/Animation102.screen';
import ChangeTheme from '../screens/ChangeTheme.screen';
import Home from '../screens/Home.screen';
import InfiniteScrollComponent from '../screens/InfiniteScroll.screen';
import ModalComponent from '../screens/Modal.screen';
import PullToRefresh from '../screens/PullToRefresh.screen';
import SectionListComponent from '../screens/SectionList.screen';
import Sides from '../screens/Sides.screen';
import SwitchComponent from '../screens/Switch.screen';
import TextInputComponent from '../screens/TextInput.screen';

const Stack = createStackNavigator();

export function StackNavigator() {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="AlertComponent" component={AlertComponent} />
        <Stack.Screen name="Animation101" component={Animation101} />
        <Stack.Screen name="Animation102" component={Animation102} />
        <Stack.Screen name="ChangeTheme" component={ChangeTheme} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="InfiniteScrollComponent" component={InfiniteScrollComponent} />
        <Stack.Screen name="ModalComponent" component={ModalComponent} />
        <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
        <Stack.Screen name="SectionList" component={SectionListComponent} />
        <Stack.Screen name="Sides" component={Sides} />
        <Stack.Screen name="SwitchComponent" component={SwitchComponent} />
        <Stack.Screen name="TextInputComponent" component={TextInputComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
