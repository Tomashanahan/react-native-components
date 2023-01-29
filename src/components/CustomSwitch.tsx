import React, {useState} from 'react';
import {Platform, Switch} from 'react-native';

interface Props {
  isOn: boolean;
  onChange: (isActive: boolean) => void;
}

function CustomSwitch({isOn, onChange}: Props) {
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: '#7CC36E'}}
      thumbColor={Platform.OS === 'android' ? '#FFFFFF' : ''}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
}

export default CustomSwitch;
