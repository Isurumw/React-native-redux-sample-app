import {StyleSheet} from 'react-native';

import {fontStyles} from 'styles/font.style';
import {foundation} from 'styles/colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: foundation.white,
    borderColor: foundation.marble,
    borderWidth: 1,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 16,
  },
  txtTitle: {
    ...fontStyles.heading5,
    color: foundation.satin,
    marginBottom: 4,
  },
  txtSubTitle: {
    ...fontStyles.body,
    color: foundation.satin,
  },
  imgIcon: {
    width: 80,
    height: 90,
    resizeMode: 'contain',
  },
});

export default styles;
