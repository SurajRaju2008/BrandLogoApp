import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import defaultStyles from "../styles/defaultStyles";


export default function Settings() {
  const logout = ()=>{
    console.log('logout');
  }
  return (
    <SafeAreaView style={defaultStyles.pageContainer}>
      <TouchableOpacity style={defaultStyles.signButton} onPress={logout}><Text style={defaultStyles.signButtonText}>Log Out</Text></TouchableOpacity>
    </SafeAreaView>
  );
}