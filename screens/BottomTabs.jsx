import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "./Homepage";
import CartScreen from "./CartScreen";
import FavoritesScreen from "./FavoritesScreen";
import OrderHistoryScreen from "./OrderHistoryScreen";
import HomepageIcon from "../assets/svg/HomepageIcon";
import CartIcon from "../assets/svg/CartIcon";

export default function BottomTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Homepage"
        options={{
          tabBarIcon: ({ focused }) => {
            return <HomepageIcon focused={focused} />;
          },
        }}
        component={Homepage}
      />
      <Tab.Screen
        name="CartScreen"
        options={{
          tabBarIcon: ({ focused }) => {
            return <CartIcon focused={focused} />;
          },
        }}
        component={CartScreen}
      />
      <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <Tab.Screen name="OrderHistoryScreen" component={OrderHistoryScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
