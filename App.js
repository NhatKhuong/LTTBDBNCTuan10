import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "@react-native-material/core";
// import Home from "./common/Home";
// import Detail from "./common/Detail";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from "./view/Start";
import Home from "./view/Home";
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen
            name="Start"
            component={Start}
          />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
