import {useRef} from 'react';
import {Animated, EasingFunction} from 'react-native';

function useAnimation() {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const starMovingPosition = (
    initialPosition: number,
    duration: number = 300,
    easing: EasingFunction,
  ) => {
    position.setValue(initialPosition);

    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      easing,
    }).start();
  };

  return {opacity, position, starMovingPosition, fadeIn, fadeOut};
}

export default useAnimation;
