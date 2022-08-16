## Game Reviews App

- Custom Fonts
- Global Styles
- Stack Navigation
- Drawer Navigation
- Image Importing
- Custom Background / Headers
- Modal

### Custom Fonts

- import `{ useFont }`
- react hooks to looad fonts before displaying the page
- able to store font name in variable

### Global Styles

- group styles can be made in their own file to be used globally
- share styles (containers, headers, etc)

### Stack Navigation

- npm install @react-navigation/native @react-navigation/native-stack
- expo install react-native-screens react-native-safe-area-context
- <NavigationContainer> -> <Stack.Navigator> -> <Stack.Screen>

- FlatList > renderItem > onPress gets passed `navigation.navigate('screenname', item)` to pass on respective state/data
- import `{ route }` prop for parameters
- `route.params.title`, `route.params.body`, etc

### Drawer Navigation

- expo install @react-navigation/drawer
- expo install react-native-gesture-handler react-native-reanimated
- import `react-native-gesture-handler` to App.js (opt?)
- update babel.config.js: (opt?)

  module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
  "react-native-reanimated/plugin",
  ],
  };

- expo r -c

- <NavigationContainer> -> <Drawer.Navigator> -> <Drawer.Screen> (the screen can be a nested stack)
- <Drawer.Navigator> can be passed a custom component to replace the header (through headerTitle)

### Image Importing

- import `{ Image }`

Usual import:

<!-- - <Image source={require('../assets/rating-1.png')} /> -->

Using template literals / concatenation not allowed with require:

<!-- - <Image source={require(`../assets/rating-${item.rating}.png`)} /> -->

Import them in dynamically:

<!-- <Image source={images.ratings[item.rating]} /> -->

- getting the image from the ratings object from `Global.js` that matches the key passed in to it

### Custom Background / Headers

Background:

- import `{ DefaultTheme }`
- customize it (applies to the whole app):

  const MyTheme = {
  ...DefaultTheme,
  colors: {
  ...DefaultTheme.colors,
  primary: 'rgb(255, 45, 85)',
  background: 'transparent',
  },
  };

- pass it into <NavigationContainer theme={myTheme}>

Headers:

- <Drawer.Navigator screenOptions={{ headerBackground: () => ( <Image source={} style={} /> ) }}
- make every screen have the same header design

### Modal

- import `{ Modal }`
- create a state for modal open or closed
- import `{ MaterialIcons }` for open/close icons and pass appropriate onPress handlers to toggle state

### Form Creation / Validation - formik and yup

Two libraries to use for form creation and validation:

- npm install formik
- npm install yup
