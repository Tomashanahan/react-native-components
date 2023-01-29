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
import {useContext} from 'react';
import {ThemeContext} from '../context/Theme/Theme.context';

interface FormState {
  name: string;
  email: string;
  phone: string;
  isSubscribe: boolean;
}

function TextInputComponent() {
  const {theme} = useContext(ThemeContext);

  const {form, isSubscribe, onChange} = useForm<FormState>({
    name: '',
    email: '',
    phone: '',
    isSubscribe: false,
  });

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={AppTheme.globalMargin}>
            <HeaderTitle title="TextInput" />
            <TextInput
              autoCapitalize="words"
              autoCorrect={false}
              keyboardAppearance={theme.currentTheme}
              onChangeText={value => onChange<string>(value, 'name')}
              placeholder="Tomas Shanahan"
              placeholderTextColor={'gray'}
              style={style.textInput}
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance={theme.currentTheme}
              keyboardType="email-address"
              onChangeText={value => onChange<string>(value, 'email')}
              placeholder="email@email.com"
              placeholderTextColor={'gray'}
              style={style.textInput}
            />

            <View style={switchStyles.switchRow}>
              <Text style={{...switchStyles.switchText, color: theme.colors.text}}>Subscribirse</Text>
              <CustomSwitch isOn={isSubscribe} onChange={value => onChange<boolean>(value, 'isSubscribe')} />
            </View>

            <TextInput
              autoCorrect={false}
              keyboardAppearance={theme.currentTheme}
              keyboardType="phone-pad"
              onChangeText={value => onChange<string>(value, 'phone')}
              placeholder="+54 0341-6110032"
              placeholderTextColor={'gray'}
              style={style.textInput}
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
