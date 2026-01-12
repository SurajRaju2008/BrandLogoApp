import React, { useState } from "react";
import { Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import defaultStyles from "../styles/defaultStyles";


export default function Home() {
  const [gpa, setGPA] = useState("");
  return (
    <SafeAreaView style={defaultStyles.pageContainer}>
       <TextInput
          style={defaultStyles.textInput}
          onChangeText={setGPA}
          placeholder="Enter Your GPA"
        />
        <Text style={defaultStyles.boldText}>Your GPA if you didnt get a B in Calc:</Text>
        <Text style={defaultStyles.bodyText}>{!gpa ?  "": Number(gpa)+.1}</Text>
    </SafeAreaView>
  );
}