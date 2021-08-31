import {StyleSheet} from 'react-native';
import {primary, foundation} from 'styles/colors';
import {fontStyles} from 'styles/font.style';

const styles = StyleSheet.create({
  tabBarLabel: {
    color: primary.stone,
    ...fontStyles.bodyBold,
  },
  tabBarLabelFocused: {
    color: foundation.grape40,
  },
  tabBar: {
    backgroundColor: foundation.white,
  },
  tabIndicator: {
    backgroundColor: foundation.grape,
  },
});

export default styles;
