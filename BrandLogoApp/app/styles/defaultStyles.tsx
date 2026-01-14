import { StyleSheet } from "react-native";
import colors from "./colors";

const defaultStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  boldText: {
    margin:20,
    fontWeight:'bold',
    fontSize: 20,
    color: colors.primaryDark, 
  },
  bodyText: {
    fontSize: 20,
    color: colors.textPrimary, 
  },
  textInput: {
    width: "90%",
    height: 48,
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: colors.textPrimary,
  },
  button: {
    width: "90%",
    height: 48,
    backgroundColor: colors.primaryDark,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: "600",
  },
   signButton: {
    width: "90%",
    height: 48,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderWidth: 3,
    borderColor: colors.primaryDark
  },
  signButtonText: {
    color: colors.primaryDark,
    fontSize: 16,
    fontWeight: "600",
  },
  img: {
    height: "30%", 
    aspectRatio: 1,  
  },
  toggle: {
    marginTop: 8,
    color: "#007AFF",
    alignSelf: "flex-end",
  },
});

export default defaultStyles;
