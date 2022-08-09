import Home from './screens/Home';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    PoppinsR: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsSB: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });
  if (!loaded) {
    return null;
  }

  return <Home />;
}
