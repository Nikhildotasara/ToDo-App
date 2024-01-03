import React from "react";
import { Text, StatusBar } from "react-native";

function OnBoarding({ route }) {
  const { namee } = route.params;

  return (
    // <StatusBar />
    <Text>Hello {namee} how are you?</Text>
  );
}

export default OnBoarding;
