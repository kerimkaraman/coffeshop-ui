import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "./Homepage";
import CartScreen from "./CartScreen";
import FavoritesScreen from "./FavoritesScreen";
import OrderHistoryScreen from "./OrderHistoryScreen";
import HomepageIcon from "../assets/svg/HomepageIcon";
import CartIcon from "../assets/svg/CartIcon";
import FavoritesIcon from "../assets/svg/FavoritesIcon";
import OrderHistoryIcon from "../assets/svg/OrderHistoryIcon";
import { Colors } from "../Globals";

export default function BottomTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.black,
        },
        tabBarLabelStyle: {
          display: "none",
        },
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
      <Tab.Screen
        name="FavoritesScreen"
        options={{
          tabBarIcon: ({ focused }) => {
            return <FavoritesIcon focused={focused} />;
          },
        }}
        component={FavoritesScreen}
      />
      <Tab.Screen
        name="OrderHistoryScreen"
        options={{
          tabBarIcon: ({ focused }) => {
            return <OrderHistoryIcon focused={focused} />;
          },
        }}
        component={OrderHistoryScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
