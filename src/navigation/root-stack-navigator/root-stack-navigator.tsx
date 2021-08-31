import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {WelcomeScreen, PropertyListScreen} from 'screens';
import BottomTabNavigator from '../bottom-tab-navigator/bottom-tab-navigator';

import {
  WELCOME_SCREEN,
  PROPERTY_LIST_SCREEN,
  BOTTOM_TAB_NAVIGATOR,
} from '../screen-names';

import style from './root-stack-navigator.styles';

export type RootStackParams = {
  [WELCOME_SCREEN]: undefined;
  [PROPERTY_LIST_SCREEN]: undefined;
  [BOTTOM_TAB_NAVIGATOR]: undefined;
};

interface IRootStackProps {
  initialRouteName?: any;
}

const Stack = createStackNavigator<RootStackParams>();

const RootStackNavigator: React.FC<IRootStackProps> = ({initialRouteName}) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName || WELCOME_SCREEN}>
      <Stack.Screen
        name={WELCOME_SCREEN}
        component={WelcomeScreen}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name={PROPERTY_LIST_SCREEN}
        component={PropertyListScreen}
        options={{
          headerTitle: 'Select a property to view',
          headerTitleStyle: style.headerTitle,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name={BOTTOM_TAB_NAVIGATOR}
        component={BottomTabNavigator}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
