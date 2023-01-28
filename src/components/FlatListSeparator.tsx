import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';

function FlatListSeparator() {
  return <View style={style.separator} />;
}

const style = StyleSheet.create({
  separator: {borderBottomWidth: 1, marginVertical: 9},
});

export default FlatListSeparator;
