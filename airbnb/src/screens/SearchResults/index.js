import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import Post from '../../components/Post';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';

import feed from '../../../assets/data/feed';

const SearchResultsScreen = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchPosts = async () => {
    try {
      const postResult = await API.graphql(
        graphqlOperation(listPosts)
      )
      setPosts(postResult.data.listPosts.items);
      console.log(postResult);
    } catch (error) {
      console.log(error);
    }
    }
    fetchPosts();
  }, [])

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;