import { createNativeStackNavigator } from './NativeStackNavigator'

import AuthScreen from '../screens/AuthScreen'

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Auth"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Auth" compoent={AuthScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigator