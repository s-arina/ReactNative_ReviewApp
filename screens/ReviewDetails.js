import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Card from '../shared/Card';

// template literals/concatenation do not work with require
// turning require('../assets/rating-1.png') to require(`../assets/rating-${item.rating}.png`) won't work
import { globalStyles, images } from '../styles/Global';

export default function ReviewDetails({ route }) {
  const item = route.params;
  // import parameters with route

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.title}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating:</Text>
          <Image
            source={images.ratings[item.rating]}
            // getting the image from the ratings object that matches the key passed in to it
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    lineHeight: 20,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
