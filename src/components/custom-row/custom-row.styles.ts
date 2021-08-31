import {StyleSheet} from 'react-native';

import {fontStyles} from 'styles/font.style';
import {foundation} from 'styles/colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 16,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  txtTitle: {
    ...fontStyles.bodyBold,
    color: foundation.satin,
    marginBottom: 4,
  },
  txtSubTitle: {
    ...fontStyles.caption1,
    color: foundation.stone,
  },
  imgIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: foundation.grape40,
  },
  imgArrowHead: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    tintColor: foundation.tin,
  },
});

export default styles;
