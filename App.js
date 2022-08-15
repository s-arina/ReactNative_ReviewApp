import React from 'react';
import { ImageBackground, StyleSheet, Image } from 'react-native';
// fonts
import { useFonts } from 'expo-font';

// screens
import HomeStack from './routes/HomeStack';
import About from './screens/About';
import Header from './shared/Header';

// drawer navigation
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
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
    <ImageBackground
      source={require('./assets/game_bg.png')}
      style={styles.headerBackground}
    >
      <NavigationContainer>
        {/* <NavigationContainer theme={MyTheme}> */}
        {/* wrap in container */}
        <Drawer.Navigator
          initialRouteName='GameZone'
          screenOptions={{
            // import own custom component for header
            headerTitle: () => <Header />,
            // headerStyle: {
            //   backgroundColor: 'transparent',
            // },
            drawerActiveTintColor: 'red',
            headerTintColor: 'red',
            headerBackground: () => (
              <Image
                source={require('./assets/game_bg.png')}
                style={styles.headerBackground}
              />
            ),
          }}
        >
          <Drawer.Screen name='Home' component={HomeStack} />
          {/* stacks can be nested within the drawer */}
          <Drawer.Screen name='About GameZone' component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
  },
});

// to set a background image for the entire screen
// import defaulttheme, set styling, apply to container, wrap container in imagebackground
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'transparent',
  },
};
