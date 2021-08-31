import {StyleSheet} from 'react-native';

import {foundation} from 'styles/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
  rowContainer: {
    paddingHorizontal: 16,
    backgroundColor: foundation.white,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
