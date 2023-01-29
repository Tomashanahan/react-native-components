import React, {useContext} from 'react';

import {useNavigation} from '@react-navigation/native';

import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {MenuItem} from '../interfaces/MenuItem.interface';
import {ThemeContext} from '../context/Theme/Theme.context';

interface Props {
  menuItem: MenuItem;
}

function FlatListMenuItem({menuItem}: Props) {
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate(menuItem.component as never)}>
      <View style={style.menuItemContainer}>
        <Icon name={menuItem.icon} color={theme.colors.primary} size={20} />
        <Text style={{...style.menuItemText, color: theme.colors.text}}>{menuItem.name}</Text>
        <Icon name="chevron-forward-outline" color={theme.colors.primary} size={20} style={style.menuItemArrow} />
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  menuItemText: {fontSize: 15, color: '#000'},
  menuItemArrow: {position: 'absolute', right: 0},
});

export default FlatListMenuItem;
