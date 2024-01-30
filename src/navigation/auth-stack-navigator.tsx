import WelcomeScreen from "@/screens/welcome-screen"
import { AuthStackParamList } from "./types"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignInScreen from "@/screens/sign-in-screen"
import SignUpScreen from "@/screens/sign-up-screen"

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthStackNavigator