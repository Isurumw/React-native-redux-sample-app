import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';

import style from './custom-button.styles';

interface ICustomButton {
  label: string;
  onPress: () => void;
  contentStyle?: StyleProp<ViewStyle>;
  testId?: string;
}

const CustomButton: React.FC<ICustomButton> = ({
  label,
  onPress,
  contentStyle,
  testId = 'test_button',
}) => {
  return (
    <TouchableOpacity
      testID={testId}
      style={[style.container, contentStyle]}
      onPress={onPress}>
      <Text style={style.label}>{label}</Text>
      <Image
        style={style.chevron}
        source={require('assets/images/chevron_right.png')}
      />
    </TouchableOpacity>
  );
};

export default CustomButton;
