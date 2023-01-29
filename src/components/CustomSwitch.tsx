import React, {useContext, useState} from 'react';

import {Platform, Switch} from 'react-native';

import {ThemeContext} from '../context/Theme/Theme.context';

interface Props {
  isOn: boolean;
  onChange: (isActive: boolean) => void;
}

function CustomSwitch({isOn, onChange}: Props) {
  const {theme} = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: theme.colors.primary}}
      thumbColor={Platform.OS === 'android' ? '#FFFFFF' : ''}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
}

export default CustomSwitch;
