import { AppStackParamList, AuthStackParamList } from "./types"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import BottomTabNavigator from "./bottom-tab-navigator"

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{
                    headerShown: false,
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}

export default AppStackNavigator