import { useFonts } from 'expo-font';
import ShopNavigator from "./src/navigation/ShopNavigator"
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    SatisfyRegular: require('./src/fonts/Satisfy-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}
