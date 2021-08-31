import {StyleSheet} from 'react-native';
import {foundation} from 'styles/colors';

const styles = StyleSheet.create({
  separatorView: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: foundation.white,
  },
  separator: {
    width: '100%',
    backgroundColor: foundation.tin,
    height: 1,
    opacity: 0.5,
  },
});

export default styles;
