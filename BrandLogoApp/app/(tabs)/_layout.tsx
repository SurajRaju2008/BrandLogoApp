import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";
import AppHeader from "../components/AppHeader";
import colors from "../styles/colors";

export default function TabsLayout() {
  return (
     <View style={{ flex: 1 }}>
      <AppHeader/>
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.tabs,
        tabBarInactiveTintColor: "gray",
        headerStyle: { backgroundColor: colors.primary },
        headerShadowVisible: false,
        headerTintColor: colors.tabs,
        tabBarStyle: { backgroundColor: colors.primary, height: 70 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          tabBarLabel:"Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "profile",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerTitle: "settings",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "school" : "school-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
    </View>
  );
}