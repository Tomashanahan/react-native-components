import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

function FlatListHeader() {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top}}>
      <Text style={style.title}>Opciones de Menu</Text>
    </View>
  );
}

const style = StyleSheet.create({
  title: {fontWeight: 'bold', fontSize: 25, marginVertical: 10, color: '#000'},
});

export default FlatListHeader;
