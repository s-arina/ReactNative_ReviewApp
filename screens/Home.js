import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/Global';

export default function Home({ navigation }) {
  // destruct navigation prop

  // press to navigate function example
  const pressHandler = () => {
    navigation.navigate('Review Details');
    // navigation.push('Review Details')
    // .push/.pop and .goBack() also work for more control if needed
  };

  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final Fantasy"',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ]);

  return (
    <View style={globalStyles.container}>
      {/* <Button title='goto review' onPress={pressHandler} /> */}
      <FlatList
        data={reviews} // pass state
        renderItem={(
          { item } // destructure each item to render out
        ) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Review Details', item)} // navigate to details page while passing in the items info
          >
            <Text style={globalStyles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
