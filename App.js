import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native"
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
