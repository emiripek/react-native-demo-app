import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { MainTabParamList } from "./types";

import HistoryScreen from "../screens/main/HistoryScreen";
import ScanScreen from "../screens/main/ScanScreen";
import ShoppingListScreen from "../screens/main/ShoppingListScreen";
import ProfileScreen from "../screens/main/ProfileScreen";

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Scan"
    >
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="ShoppingList" component={ShoppingListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}


