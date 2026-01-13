import React, { useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import defaultStyles from "../styles/defaultStyles";
const [suprise, setSuprise] = useState(false);

export default function Profile() {
  return (
    <SafeAreaView style={defaultStyles.pageContainer}>
      
      <Text style={defaultStyles.bodyText}>My School</Text>
    </SafeAreaView>
  );
}