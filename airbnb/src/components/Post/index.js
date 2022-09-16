import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles.js';

const days = 7;

const Post = props => {
  const post = props.post;

  return (
    <Pressable style={styles.container}>
      {/* Image  */}
      <Image style={styles.image} source={{uri: post.image}} />

      {/* Bed & Bedroom  */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      {/*  Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.price}> ${post.newPrice} </Text>/ night
      </Text>

      {/*  Total price */}
      <Text style={styles.totalPrice}>${post.newPrice * days} total</Text>
    </Pressable>
  );
};

export default Post;
