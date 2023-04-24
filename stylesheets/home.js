import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    zIndex:0,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
  },
  bodyMenu: {
    width: "90%",
    height: "80%",
    position: "absolute",
    backgroundColor: "#82BC59",
    borderRadius: 10,
  },
  contentMenu: {
  },
  containerMenu: {
    position: "relative"
    , width: "100%"
    , height: "100%"
    , flex: 1
    , justifyContent: "center"
    , alignItems: "center",
    zIndex: 1
  }
});
