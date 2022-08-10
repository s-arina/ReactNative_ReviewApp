import React from 'react';
import { StyleSheet } from 'react-native';

// react navigation imports
// import { NavigationContainer } from '@react-navigation/native';
// container not needed if being exported to app js, wrap it there instead
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import stack screens
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

// create a stack
const Stack = createNativeStackNavigator();

// navigator options/styling/etc
// https://reactnavigation.org/docs/native-stack-navigator/

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home' // first route to render on load
      screenOptions={{
        // default options for screens (styling)
        headerTintColor: 'steelblue',
        headerStyle: { backgroundColor: '#eee' },
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Review Details' component={ReviewDetails} />
    </Stack.Navigator>
  );
}
