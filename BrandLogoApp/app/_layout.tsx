import AppHeader from "@/components/AppHeader";
import { AuthProvider } from "@/components/AuthProvider";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar style="light"/>
      <AppHeader />
      <Stack screenOptions={{
          headerShown: false,
        }}/>
    </AuthProvider> 
  );
}