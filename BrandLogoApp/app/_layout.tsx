import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import AppHeader from "./components/AppHeader";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light"/>
      <AppHeader/>
      <Stack />
    </>
  
);
}