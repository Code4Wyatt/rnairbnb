import React, { useEffect, useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from './styles.js';
import SuggestionRow from "./SuggestionRow";
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';

const DestinationSearchScreen = (props) => {
  const [inputText, setInputText] = useState('');
  const [posts, setPosts] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {

    const fetchPosts = async () => {
    try {
      const postResult = await API.graphql(
        graphqlOperation(listPosts)
      );
      setPosts(postResult.data.listPosts.items);
      console.log(postResult);
    } catch (error) {
      console.log(error);
    }
    }
    fetchPosts();
  }, [])
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder='Where are you going?'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyDYnkl8rGqpQ9-6XjrH3ssqNSDiJHpULGw',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;