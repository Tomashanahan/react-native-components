import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces/MenuItem.interface';

interface Props {
  menuItem: MenuItem;
}

function FlatListMenuItem({menuItem}: Props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate(menuItem.component as never)}>
      <View style={style.menuItemContainer}>
        <Icon name={menuItem.icon} color="#000" size={20} />
        <Text style={style.menuItemText}>{menuItem.name}</Text>
        <Icon
          name="chevron-forward-outline"
          color="#000"
          size={20}
          style={style.menuItemArrow}
        />
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
