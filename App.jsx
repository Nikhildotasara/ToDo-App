import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import FirstScreen from "./Components/FirstScreen/FirstScreen.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "./Components/OnBoarding/OnBoarding.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="FirstScreen">
          <Stack.Screen
            options={{
              title: "",
              headerShown: false,
            }}
            name="FirstScreen"
            component={FirstScreen}
          />
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
