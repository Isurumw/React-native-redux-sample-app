import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import CustomButton from 'components/custom-button/custom-button';

import {BOTTOM_TAB_NAVIGATOR} from 'navigation/screen-names';
import style from './welcome.styles';

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const actionSignin = () => {
    navigation.navigate(BOTTOM_TAB_NAVIGATOR);
  };

  return (
    <View style={style.container}>
      <View style={style.middleContainer}>
        <Image
          style={style.logo}
          source={require('assets/images/redux_love.png')}
        />
        <Text style={style.subHeading}>Sample redux application.</Text>
        <Text style={style.description}>
          Redux helps you write applications that behave consistently, run in
          different environments (client, server, and native), and are easy to
          test.
        </Text>
        <CustomButton
          label="SIGN IN"
          onPress={actionSignin}
          contentStyle={style.signinButton}
        />
      </View>
      <View style={style.middleContainer}>
        <Text style={style.signupHeading}>Not a Awesome user yet?</Text>
        <TouchableOpacity style={style.signupButton}>
          <Text style={style.signupLabel}>
            Sign up on our website at{' '}
            <Text style={style.signupEmail}>awesome.com.au</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
