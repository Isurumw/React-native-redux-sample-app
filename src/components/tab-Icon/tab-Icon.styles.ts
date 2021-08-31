import {StyleSheet} from 'react-native';
import {foundation} from 'styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: foundation.white,
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default styles;
