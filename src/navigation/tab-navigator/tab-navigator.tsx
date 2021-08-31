import React, {useEffect, useState} from 'react';
import {
  SceneMap,
  TabView,
  TabBar,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  SceneRendererProps,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  NavigationState,
} from 'react-native-tab-view';
import {Dimensions, Text} from 'react-native';

import style from './tab-navigator.styles';

interface ITabNavigator {
  onIndexChange?: (index: number) => void;
  tabs: {screen: React.FC; route: string}[];
}

const TabNavigator: React.FC<ITabNavigator> = ({onIndexChange, tabs}) => {
  const [routes, setRoutes] = useState<{key: string; title: string}[]>([]);
  const [scene, setScene] = useState<{[x: string]: React.FC<{}>}>();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setRoutes(
      tabs.map(tab => ({key: tab.route, title: tab.route.toUpperCase()})),
    );
    setScene(
      tabs
        .map(tab => ({[tab.route]: tab.screen}))
        .reduce((r, c) => Object.assign(r, c), {}),
    );
  }, [tabs]);

  const onChangeIndex = (current: number) => {
    setIndex(current);
    if (onIndexChange) {
      onIndexChange(current);
    }
  };

  const renderTabBar = (
    tabProps: SceneRendererProps & {navigationState: NavigationState<any>},
  ) => (
    <TabBar
      {...tabProps}
      style={style.tabBar}
      renderLabel={({route, focused}) => (
        <Text style={[style.tabBarLabel, focused && style.tabBarLabelFocused]}>
          {route.title}
        </Text>
      )}
      indicatorStyle={style.tabIndicator}
    />
  );

  return (
    <>
      {scene && (
        <TabView
          navigationState={{index, routes}}
          renderScene={SceneMap(scene)}
          onIndexChange={onChangeIndex}
          initialLayout={{width: Dimensions.get('window').width}}
          renderTabBar={renderTabBar}
        />
      )}
    </>
  );
};

export default TabNavigator;
