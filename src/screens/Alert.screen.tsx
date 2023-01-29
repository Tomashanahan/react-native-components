import React from 'react';
import {View, StyleSheet, Button, Alert, Platform} from 'react-native';

import prompt from 'react-native-prompt-android';

import HeaderTitle from '../components/HeaderTitle';

const AlertComponent = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const showPrompt = () => {
    if (Platform.OS === 'ios') {
      Alert.prompt(
        'Estas seguro?',
        '',
        (value: string) => console.log(value),
        'plain-text',
        'Placeholder por default', // sale como texto predeterminado en el input
        'email-address', // default | number-pad | decimal-pad | numeric | email-address | phone-pad | url
      );
    } else if (Platform.OS === 'android') {
      prompt(
        'Enter password',
        'Enter your password to claim your $1.5B in lottery winnings',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'default',
          },
          {
            text: 'OK',
            onPress: password =>
              console.log('OK Pressed, password: ' + password),
          },
        ],
        {
          type: 'numeric',
          cancelable: false,
          defaultValue: 'test',
          placeholder: 'placeholder',
        },
      );
    }
  };

  return (
    <View style={styles.container}>
      <HeaderTitle title="Alerts" />
      <Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />
      <Button title={'3-Button Alert'} onPress={createThreeButtonAlert} />
      <Button title={'Show Prompt'} onPress={showPrompt} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    alignItems: 'center',
  },
});

export default AlertComponent;
