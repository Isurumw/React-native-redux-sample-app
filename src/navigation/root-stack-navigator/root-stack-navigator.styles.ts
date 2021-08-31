import {StyleSheet} from 'react-native';

import {fontStyles} from 'styles/font.style';
import {foundation} from 'styles/colors';

const style = StyleSheet.create({
  headerTitle: {
    ...fontStyles.heading5,
    color: foundation.satin,
  },
});

export default style;
