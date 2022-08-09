import React from 'react';

// react navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import stack screens
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

// create a stack
const homeStack = createNativeStackNavigator();

export default function HomeStack() {
  // export this block out
  return (
    <NavigationContainer>
      <homeStack.Navigator>
        <homeStack.Screen name='Home' component={Home} />
        <homeStack.Screen name='Review Details' component={ReviewDetails} />
      </homeStack.Navigator>
    </NavigationContainer>
  );
}
