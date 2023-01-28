import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';

function Animation102() {
  return (
    <View style={style.container}>
      <View style={style.purpleColor} />
      <Text>Animation102 </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {flex: 1},
  purpleColor: {backgroundColor: '#5856D6', width: 150, height: 150},
});

export default Animation102;
