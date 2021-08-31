import {StyleSheet} from 'react-native';

import {foundation} from 'styles/colors';
import {fontStyles} from 'styles/font.style';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: foundation.white,
    paddingTop: 43,
    paddingBottom: 23,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  middleContainer: {
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    height: 170,
    width: '100%',
    resizeMode: 'contain',
    marginHorizontal: 87,
    marginTop: 37,
  },
  subHeading: {
    ...fontStyles.heading4,
    color: foundation.satin,
    marginTop: 15,
  },
  description: {
    ...fontStyles.heading5,
    color: foundation.pewter,
    marginTop: 8,
    textAlign: 'justify',
  },
  signinButton: {
    marginHorizontal: 8,
    marginTop: 23,
  },
  signupHeading: {
    ...fontStyles.heading6,
    color: foundation.pewter,
    textAlign: 'center',
  },
  signupLabel: {
    ...fontStyles.body,
    color: foundation.pewter,
  },
  signupEmail: {
    ...fontStyles.body,
    color: foundation.grape,
    textDecorationLine: 'underline',
  },
  signupButton: {
    marginTop: 4,
  },
});

export default style;
