// src/navigation/OnboardingStack.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HowDoYouEatScreen from "../screens/onboarding/HowDoYouEatScreen";
console.log("HowDoYouEatScreen type:", typeof HowDoYouEatScreen);
import HealthConsiderationsScreen from "../screens/onboarding/HealthConsiderationsScreen";
import NameScreen from "../screens/onboarding/NameScreen";
import AgreementScreen from "../screens/onboarding/AgreementScreen";
import MainTabs from "./MainTabs";

import type { OnboardingStackParamList } from "./types";

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export default function OnboardingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HowDoYouEat">
      <Stack.Screen name="HowDoYouEat" component={HowDoYouEatScreen} />
      <Stack.Screen name="HealthConsiderations" component={HealthConsiderationsScreen} />
      <Stack.Screen name="Name" component={NameScreen} />
      <Stack.Screen name="Agreement" component={AgreementScreen} />
      <Stack.Screen name="Main" component={MainTabs} />
    </Stack.Navigator>
  );
}