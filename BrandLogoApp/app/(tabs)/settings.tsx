import { supabase } from "@/utils/supabase";
import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import defaultStyles from "../styles/defaultStyles";


export default function Settings() {
  async function handleLogout() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Logout error:", error);
        Alert.alert("Logout failed", error.message);
      }
    } catch (err: any) {
      Alert.alert("Logout failed", err?.message ?? String(err));
    }
  }

  return (
    <SafeAreaView style={defaultStyles.pageContainer}>
      <TouchableOpacity style={defaultStyles.signButton} onPress={handleLogout}><Text style={defaultStyles.signButtonText}>Log Out</Text></TouchableOpacity>
    </SafeAreaView>
  );
}