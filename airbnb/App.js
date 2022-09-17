/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';
import 'react-native-gesture-handler';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Amplify } from 'aws-amplify';


import HomeScreen from './src/screens/Home';
import SearchResults from './src/screens/SearchResults';
import Post from './src/components/Post';

import feed from './assets/data/feed';

const post1 = feed[0];

const App = () => {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      {/* <Post post={post1} /> */}
      <SearchResults />
    </SafeAreaView>
  );
};

export default withAuthenticator(App);
