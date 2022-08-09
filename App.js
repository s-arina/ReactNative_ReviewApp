import { useFonts } from 'expo-font';
import Navigator from './routes/HomeStack';

export default function App() {
  const [loaded] = useFonts({
    PoppinsR: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsSB: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });
  if (!loaded) {
    return null;
  }

  return <Navigator />;
}
