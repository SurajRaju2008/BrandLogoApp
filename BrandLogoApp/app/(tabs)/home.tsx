import React from "react";
import { Text, View } from "react-native";
import defaultStyles from "../styles//defaultStyles";

export default function Home() {
  return (
    <View style={defaultStyles.pageContainer}>
      <Text style={defaultStyles.bodyText}>Best Home Page</Text>
    </View>
  );
}