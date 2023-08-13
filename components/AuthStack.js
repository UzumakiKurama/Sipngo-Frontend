
import { NavigationContainer } from "@react-navigation/native";
import Signin from "./Signin";
import { createStackNavigator } from "@react-navigation/stack";
import Welcomesipngo from './Welcomesipngo';
import Signup from './Signup'
const Stack = createStackNavigator();

export default function AuthStack(){

    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name = "Welcome Sipngo" component={Welcomesipngo}/>
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name = "Signup" component = {Signup}/>
        </Stack.Navigator>
        </NavigationContainer>
    )

}