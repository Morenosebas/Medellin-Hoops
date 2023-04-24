import { Text, View, TouchableOpacity, Image, ImageBackground, ScrollView } from "react-native";
import { styles } from "../stylesheets/home";
import { NavBarTop } from "../components/navBarTop";
import { NavBarBottom } from "../components/btnBottomBar";
import { useRoute } from "@react-navigation/native";
export function Inicio({ navigation }) {
  const route = useRoute().name;
  console.log("Inicio: ", route);
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/back2.jpg")} style={styles.image}>
        <NavBarTop navigation={navigation} />
        <View style={styles.containerMenu}>
          <ScrollView contentContainerStyle={styles.contentMenu} style={styles.bodyMenu}>
            <Text style={{ color: "black", fontWeight: "bold" }}>Home</Text>
            <Text style={{ color: "black", fontWeight: "bold" }}>Home</Text>
            <Text style={{ color: "black", fontWeight: "bold" }}>Home</Text>
            <Text style={{ color: "black", fontWeight: "bold" }}>Home</Text>
          </ScrollView>
        </View>
        <NavBarBottom hinstance={route} navigation={navigation} />
      </ImageBackground>
    </View>
  );
}
