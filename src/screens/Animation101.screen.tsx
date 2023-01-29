import React from 'react';
import {useContext} from 'react';

import {Animated, Button, StyleSheet, Easing} from 'react-native';
import {View} from 'react-native';

import {ThemeContext} from '../context/Theme/Theme.context';
import useAnimation from '../hooks/useAnimation';

function Animation101() {
  const {opacity, position, starMovingPosition, fadeIn, fadeOut} = useAnimation();
  const {theme} = useContext(ThemeContext);

  return (
    <View style={style.container}>
      <Animated.View
        style={{
          ...style.purpleColor,
          backgroundColor: theme.colors.primary,
          opacity,
          transform: [{translateY: position}],
        }}
      />
      <Button
        title="FadeIn 101"
        onPress={() => {
          fadeIn();
          starMovingPosition(-100, 800, Easing.bounce);
        }}
        color={theme.colors.primary}
      />
      <View style={style.separator} />
      <Button title="FadeOut 101" onPress={fadeOut} color={theme.colors.primary} />
    </View>
  );
}

const style = StyleSheet.create({
  separator: {marginVertical: 10},
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  purpleColor: {
    borderRadius: 10,
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default Animation101;
