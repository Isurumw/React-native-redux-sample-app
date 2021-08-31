import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabIcon from 'components/tab-Icon/tab-Icon';

import {OverviewScreen, SummaryScreen} from 'screens';

import {foundation} from 'styles/colors';

export type BottomTabParams = {
  Overview: undefined;
  Summary: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParams>();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: foundation.grape,
        tabBarInactiveTintColor: foundation.pewter,
        tabBarIcon: ({color}) => {
          let icon;

          if (route.name === 'Overview') {
            icon = require('assets/images/overview.png');
          } else {
            icon = require('assets/images/clipboard.png');
          }
          return <TabIcon image={icon} color={color} />;
        },
      })}>
      <Tab.Screen name="Overview" component={OverviewScreen} />
      <Tab.Screen name="Summary" component={SummaryScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
