import React from 'react';
import {View, Image, ImageSourcePropType} from 'react-native';
import styles from './tab-Icon.styles';

interface ITabIconProps {
  image: ImageSourcePropType;
  color: string;
}

const TabIcon: React.FC<ITabIconProps> = ({image, color}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={[styles.icon, {tintColor: color}]} />
    </View>
  );
};

export default TabIcon;
