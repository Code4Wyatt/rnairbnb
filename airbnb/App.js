/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';
import 'react-native-gesture-handler';

import {withAuthenticator} from 'aws-amplify-react-native';
import {Amplify} from 'aws-amplify';

import Router from './src/navigation/router';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default withAuthenticator(App);
