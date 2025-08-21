import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingStack from "./src/navigation/OnboardingStack";

export default function App() {
  return (
    <NavigationContainer>
      <OnboardingStack />
    </NavigationContainer>
  );
}
