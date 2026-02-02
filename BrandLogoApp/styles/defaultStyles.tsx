import { StyleSheet } from "react-native";
import colors from "./colors";

const defaultStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: colors.neutral,
    justifyContent: "center",
    alignItems: "center",
  },
  pageAuthContainer: {
    flex: 1,
    backgroundColor: colors.tabs,
    justifyContent: "center",
    alignItems: "center",
  },
  boldText: {
    paddingLeft:"20%",
    margin:20,
    fontWeight:'bold',
    fontSize: 20,
    color: colors.primaryDark, 
  },
   boldHomeText: {
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
    width: 300,
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
  bubble: {
    flex: 3,
  },
  row: {
  flexDirection: "row",
  justifyContent:"space-around" ,
  paddingVertical: 10,
  borderBottomWidth: 1,
  borderColor: "#eee",
},
rank: {
  width: 30,
  fontWeight: "bold",
},
name: {
  fontWeight: "600",
},
school: {
  fontSize: 12,
  color: "#666",
},
gpa: {
  fontWeight: "bold",
},
});

export default defaultStyles;
