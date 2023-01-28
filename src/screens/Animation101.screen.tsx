import React from 'react';
import {Animated, Button, StyleSheet, Easing} from 'react-native';
import {View} from 'react-native';
import useAnimation from '../hooks/useAnimation';

function Animation101() {
  const {opacity, position, starMovingPosition, fadeIn, fadeOut} =
    useAnimation();

  return (
    <View style={style.container}>
      <Animated.View
        style={{
          ...style.purpleColor,
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
      />
      <View style={style.separator} />
      <Button title="FadeOut 101" onPress={fadeOut} />
    </View>
  );
}

const style = StyleSheet.create({
  separator: {marginVertical: 10},
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  purpleColor: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default Animation101;
