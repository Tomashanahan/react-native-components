import React, {useContext} from 'react';

import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/Theme/Theme.context';

interface Props {
  title: string;
  titleColor?: string;
}

function HeaderTitle({title}: Props) {
  const {top} = useSafeAreaInsets();
  const {theme} = useContext(ThemeContext);

  return (
    <View style={{marginTop: top}}>
      <Text style={{...style.title, color: theme.colors.text}}>{title}</Text>
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
