import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
export const BtnInicio = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.btnInicio} 
        onPress={() => navigation.navigate("Home")}
        >
            <View style={{
                position: "relative", flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Text style={{ color: "#000", fontSize: 12 }}>Inicio</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    btnInicio: {
        position: "absolute",
        width: 75,
        height: 36,
        left: 294,
        top: 35,
        borderRadius: 15,
        backgroundColor: "#FFFFFF",
    },
});
