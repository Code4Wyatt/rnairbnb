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
import { withAuthenticator } from '@aws-amplify/react-native';
import '@aws-amplify/ui-react/styles.css';

import Router from './src/navigation/router';

// Screens
import HomeScreen from './src/screens/Home';
import SearchResults from './src/screens/SearchResults';
import DestinationSearch from './src/screens/DestinationSearch';
import Guests from './src/screens/Guests';

// Components
import Post from './src/components/Post';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default withAuthenticator(App);
