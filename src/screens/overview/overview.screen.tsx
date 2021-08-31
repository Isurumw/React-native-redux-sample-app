import React from 'react';
import {View, Text} from 'react-native';

import style from './overview.styles';

const OverviewScreen: React.FC = () => {
  return (
    <View style={style.container}>
      <Text>Welcome to the management!</Text>
    </View>
  );
};

export default OverviewScreen;
