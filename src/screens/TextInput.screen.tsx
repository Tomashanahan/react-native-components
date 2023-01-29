import React from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';

import {AppTheme} from '../theme/App.theme';
import HeaderTitle from '../components/HeaderTitle';
import {StyleSheet} from 'react-native';
import useForm from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';
import {switchStyles} from './Switch.screen';

interface FormState {
  name: string;
  email: string;
  phone: string;
  isSubscribe: boolean;
}

function TextInputComponent() {
  const {form, isSubscribe, onChange} = useForm<FormState>({
    name: '',
    email: '',
    phone: '',
    isSubscribe: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={AppTheme.globalMargin}>
            <HeaderTitle title="TextInput" />
            <TextInput
              style={style.textInput}
              onChangeText={value => onChange<string>(value, 'name')}
              placeholder="Tomas Shanahan"
              autoCorrect={false}
              autoCapitalize="words"
            />
            <TextInput
              style={style.textInput}
              onChangeText={value => onChange<string>(value, 'email')}
              placeholder="email@email.com"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <View style={switchStyles.switchRow}>
              <Text style={switchStyles.switchText}>Subscribirse</Text>
              <CustomSwitch
                isOn={isSubscribe}
                onChange={value => onChange<boolean>(value, 'isSubscribe')}
              />
            </View>

            <TextInput
              style={style.textInput}
              onChangeText={value => onChange<string>(value, 'phone')}
              placeholder="+54 0341-6110032"
              autoCorrect={false}
              keyboardType="phone-pad"
            />

            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <View style={style.scrollBottomSpace} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  scrollBottomSpace: {marginBottom: 100},
  textInput: {
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
    padding: 10,
    borderColor: 'rgba(0,0,0,0.3)',
  },
});

export default TextInputComponent;
