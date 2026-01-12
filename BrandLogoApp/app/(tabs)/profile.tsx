import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import defaultStyles from "../styles/defaultStyles";


export default function Profile() {
  return (
    <SafeAreaView style={defaultStyles.pageContainer}>
      <TouchableOpacity style={defaultStyles.button}>My Name</TouchableOpacity>
      <Text style={defaultStyles.bodyText}>My School</Text>
    </SafeAreaView>
  );
}