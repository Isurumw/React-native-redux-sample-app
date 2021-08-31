import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {View, StyleProp, ViewStyle} from 'react-native';

import styles from './separator.styles';

export interface IPlaceholder {
  containerStyle?: StyleProp<ViewStyle>;
}

const Separator: React.FC<IPlaceholder> = ({containerStyle}) => {
  return (
    <View style={[styles.separatorView, containerStyle]}>
      <View style={styles.separator} />
    </View>
  );
};

export default Separator;
