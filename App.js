import React from 'react';
import { Image, StyleSheet } from 'react-native';
// fonts
import { useFonts } from 'expo-font';

// screens
import HomeStack from './routes/HomeStack';
import About from './screens/About';
import Header from './shared/Header';

// drawer navigation
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

export default function App() {
  const [loaded] = useFonts({
    PoppinsR: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsSB: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  const Drawer = createDrawerNavigator(); // create a drawer

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {/* wrap in container */}
      <Drawer.Navigator
        initialRouteName='GameZone'
        screenOptions={{
          // import own custom component for header
          headerTitle: () => <Header />,
        }}
      >
        <Drawer.Screen name='GameZone' component={HomeStack} />
        {/* stacks can be nested within the drawer */}
        <Drawer.Screen name='About GameZone' component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
