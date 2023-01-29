import React, {useContext} from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import HeaderTitle from '../components/HeaderTitle';
import {AppTheme} from '../theme/App.theme';
import {ThemeContext} from '../context/Theme/Theme.context';

function ChangeTheme() {
  const {setDarkTheme, setLightTheme, theme} = useContext(ThemeContext);

  return (
    <View style={AppTheme.globalMargin}>
      <HeaderTitle title="ChangeTheme" />
      <View style={style.buttonsContainer}>
        <TouchableOpacity
          style={{...style.container, backgroundColor: theme.colors.primary}}
          onPress={setLightTheme}
          activeOpacity={0.8}>
          <Text style={{color: theme.colors.text}}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...style.container, backgroundColor: theme.colors.primary}}
          onPress={setDarkTheme}
          activeOpacity={0.8}>
          <Text style={{color: theme.colors.text}}>Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  buttonsContainer: {flexDirection: 'row', justifyContent: 'space-between', marginTop: 10},
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    borderRadius: 10,
  },
  text: {color: '#000'},
});

export default ChangeTheme;
