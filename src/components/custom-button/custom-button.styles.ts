import {StyleSheet} from 'react-native';

import {foundation} from 'styles/colors';
import {fontStyles} from 'styles/font.style';

const style = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 20,
    backgroundColor: foundation.grape,
  },
  chevron: {
    width: 15,
    height: 15,
  },
  label: {
    ...fontStyles.button,
    color: foundation.white,
    marginStart: 14,
  },
});

export default style;
