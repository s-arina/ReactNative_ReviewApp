import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/Global';

export default function ReviewDetails({ route }) {
  const item = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>{item.title}</Text>
      <Text>Rating: {item.rating}</Text>
      <Text>{item.body}</Text>
    </View>
  );
}
