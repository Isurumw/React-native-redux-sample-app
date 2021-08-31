import React from 'react';
import {
  View,
  Image,
  Text,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ImageSourcePropType,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  StyleProp,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ViewStyle,
} from 'react-native';

import styles from './custom-row.styles';

interface ICustomRow {
  icon?: ImageSourcePropType;
  title: string;
  subTitle: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const CustomRow: React.FC<ICustomRow> = ({
  icon,
  title,
  subTitle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        style={styles.imgIcon}
        source={icon ?? require('assets/images/file_text.png')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.txtTitle}>{title}</Text>
        <Text style={styles.txtSubTitle}>{subTitle}</Text>
      </View>
      <Image
        style={styles.imgArrowHead}
        source={require('assets/images/chevron_right.png')}
      />
    </View>
  );
};

export default CustomRow;
