## Game Reviews App

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
