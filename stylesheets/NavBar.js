import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 80,
    width: "100%",
    backgroundColor: "#88108F",
    top: 10,
    zIndex:1002
  },
  containerBars: {
    position: "absolute",
    width: 25,
    height: "100%",
    marginStart: 10,
    justifyContent: "center",
    alignItems: "center",
    zIndex:1000
  },
  containerMedLogo: {
    position: "absolute",
    height:"100%",
    width: "100%",
    zIndex:-1,
    alignItems:"center",
    justifyContent:"center",
  },
  slideBar:{
    position:"relative",
    top:0,
    backgroundColor:"#FFF",
    zIndex:1002

  }
});
