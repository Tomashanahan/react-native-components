import React from 'react';
import {useContext} from 'react';

import {StyleSheet} from 'react-native';
import {View} from 'react-native';

import {ThemeContext} from '../context/Theme/Theme.context';

function FlatListSeparator() {
  const {theme} = useContext(ThemeContext);

  return <View style={{...style.separator, borderColor: theme.dividerColor}} />;
}

const style = StyleSheet.create({
  separator: {borderBottomWidth: 1, marginVertical: 9},
});

export default FlatListSeparator;
