import { Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer,  } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Inicio } from "./screens/Home";
import { Programacion } from "./screens/Programacion";
import { Torneos } from "./screens/Torneos";
import { Init } from "./screens/Init";
import { Login } from "./screens/SignIn";
import { SignUp } from "./screens/SignUp";

const Stack = createStackNavigator();
const MyStack = () => {
  // fetch('https://www.balldontlie.io/api/v1/players').then((response) => response.json()).then((json) =>console.log(json))
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Init"
        options={{ headerShown: false }}
        component={Init}
      />
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Inicio}
      />
      <Stack.Screen
        name="SignIn"
        options={{ headerShown: false }}
        component={Login}
      />
      <Stack.Screen
        name="SignUp"
        options={{ headerShown: false }}
        component={SignUp}
      />
      <Stack.Screen
        name="Programacion"
        options={{ headerShown: false }}
        component={Programacion}
      />
      <Stack.Screen
        name="Torneos"
        options={{
          headerShown: false,
        }}
        component={Torneos}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
