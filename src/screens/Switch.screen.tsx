import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';

interface StateProps {
  isActive: boolean;
  isHungry: boolean;
  isHappy: boolean;
}

const SwitchComponent = () => {
  const [state, setState] = useState<StateProps>({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
  const {isActive, isHungry, isHappy} = state;

  const onChange = (value: boolean, field: keyof typeof state): void => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={switchStyles.container}>
      <HeaderTitle title="Switches" />
      <View style={switchStyles.switchRow}>
        <Text style={switchStyles.switchText}>isActive</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={switchStyles.switchRow}>
        <Text style={switchStyles.switchText}>isHungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={switchStyles.switchRow}>
        <Text style={switchStyles.switchText}>isHappy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={switchStyles.switchText}>
        {JSON.stringify(state, null, 3)}
      </Text>
    </View>
  );
};

export const switchStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {fontSize: 20, color: '#000'},
});

export default SwitchComponent;
