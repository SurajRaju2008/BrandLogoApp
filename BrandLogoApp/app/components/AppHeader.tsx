import { Image, StyleSheet, View } from "react-native";
import colors from "../styles/colors";


export default function AppHeader() {
  return <View style={styles.container}>
    <Image style={styles.img} source={require("../../assets/images/logo.png")}/>
  </View>;
}
const styles = StyleSheet.create({
    container: {
    height: 100,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
  },
  img: {
    height: "90%", 
    aspectRatio: 1,  
  },
});
