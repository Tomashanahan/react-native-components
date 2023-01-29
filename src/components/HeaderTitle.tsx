import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  title: string;
  titleColor?: string;
}

function HeaderTitle({title, titleColor}: Props) {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top}}>
      <Text style={{...style.title, color: titleColor}}>{title}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 10,
    color: '#000',
  },
});

export default HeaderTitle;
