import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  image: {
    resizeMode: "center",
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  form: {
    width: 320,
    height: 520,
    position: "absolute",
    top: 196,
    backgroundColor: "white",
    borderRadius: 15,
  },
  formGroup: {
    position: "relative",
    height: "40%",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    marginTop: 70,
    padding: 10,
  },
  label: {
    position: "relative",
    backgroundColor: "transparent",
  },
  input: {
    position: "relative",
    width: "100%",
    height: 40,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  inputSelect: {
    position: "relative",
    width: "100%",
    height: 40,
    borderBottomColor: "#88108F",
    borderBottomWidth: 2,
  },
  topSection: {
    position: "relative",
    width: 310,
    height: 103,
    left: 5,
    top: 29,
  },
  textWelcome: {
    position: "absolute",
    width: "100%",
    height: 24,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 18,
    color: "#000",
    textAlign:"center"
  },
  navBarForm: {
    position: "absolute",
    width: 310,
    height: 53,
    top: 79,
    backgroundColor: "#999999",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  selectdBtn: {
    position: "relative",
    width: 155,
    height: 53,
    backgroundColor: "#88108F",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1,
  },
  unSelectdBtn: {
    position: "relative",
    width: 155,
    height: 53,
    backgroundColor: "#000000",
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 0.6,
  },
  btnInitS:{
    position:"absolute",
    backgroundColor:"#88108F",
    width:100,
    height:40,
    borderRadius:15,
    left:110,
    top:450
  }
});
