/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, Platform} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import store from 'awesome-redux/store/store';

import RootStackNavigator from 'navigation/root-stack-navigator/root-stack-navigator';
import {WELCOME_SCREEN} from './src/navigation/screen-names';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
      />
      <Provider store={store}>
        <NavigationContainer>
          <RootStackNavigator initialRouteName={WELCOME_SCREEN} />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
