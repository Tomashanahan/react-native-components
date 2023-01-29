import React, {useRef} from 'react';
import {useContext} from 'react';

import {Animated, PanResponder, StyleSheet} from 'react-native';
import {View} from 'react-native';

import {ThemeContext} from '../context/Theme/Theme.context';

function Animation102() {
  const pan = useRef(new Animated.ValueXY()).current;
  const {theme} = useContext(ThemeContext);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });

  return (
    <View style={style.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), {...style.purpleColor, backgroundColor: theme.colors.primary}]}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  purpleColor: {
    backgroundColor: '#1896D3',
    width: 150,
    height: 150,
    borderRadius: 4,
  },
});

export default Animation102;
