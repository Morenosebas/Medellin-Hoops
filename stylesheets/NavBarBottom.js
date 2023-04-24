import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 51,
    width: "100%",
    backgroundColor: "#88108F",
    bottom: 0,
    flexDirection: "row",
    zIndex:1000
  },
  btn:{
    flex: 1,
    borderWidth:1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
    btnText:{
    color: "#fff",
  }

});
