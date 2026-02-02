import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FetchProfiles from "../../components/FetchProfiles";
import defaultStyles from "../../styles/defaultStyles";


export default function Home() {

  return (
    <SafeAreaView style={defaultStyles.pageContainer}>
        <FetchProfiles/>
    </SafeAreaView>
  );
}