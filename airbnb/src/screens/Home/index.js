import {View, Text, ImageBackground, Pressable} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import { API, grapqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';
const HomeScreen = props => {
  const navigation = useNavigation();
 useEffect(() => {

    const fetchPosts = async () => {
    try {
      const postResult = await API.graphql(
        grapqlOperation(listPosts)
      )
      console.log(postResult);
    } catch (error) {
      console.log(error);
    }
    }
    fetchPosts();
  }, [])
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('Destinations Search')}>
          <Fontisto name="search" size={25} color={'#f15454'} />
          <Text style={styles.buttonText}> Where are you going?</Text>
        </Pressable>
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.log('Exp Btn Clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
