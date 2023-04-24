import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NavBarBottom } from "../components/btnBottomBar";
import { NavBarTop } from "../components/navBarTop";
export function Programacion({ navigation }) {
  const route = useRoute().name;
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/back2.jpg")} style={styles.image}>
        <NavBarTop navigation={navigation} />
        <View style={styles.containerMenu}>
          <ScrollView contentContainerStyle={styles.contentMenu} style={styles.bodyMenu}>
            <Text style={{ color: "black", fontWeight: "bold" }}>Programacion</Text>
          </ScrollView>
        </View>
        <NavBarBottom hinstance={route} navigation={navigation} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyMenu: {
    width: "90%",
    height: "80%",
    position: "absolute",
    backgroundColor: "#82BC59",
    borderRadius: 10,
  },
  contentMenu: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
