import { View, TouchableOpacity, Text, ImageBackground, TextInput } from "react-native";
import { styles } from "../stylesheets/FormsStyles";
import { BtnInicio } from "../components/btnInicio";
import { useState } from "react";
export function Login({ navigation }) {
    const [selectedInput, setSelectedInput] = useState(null);

    const handleInputFocus = (inputName) => {
        setSelectedInput(inputName);
    };

    const handleInputBlur = () => {
        setSelectedInput(null);
    };

    const inputStyles = {
        input1: {
            ...styles.input,
            ...(selectedInput === "input1" && styles.inputSelect),
        },
        input2: {
            ...styles.input,
            ...(selectedInput === "input2" && styles.inputSelect),
        },
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../assets/backMain.png")} style={styles.image}>
                <BtnInicio navigation={navigation} />
                <View style={styles.form}>
                    <View style={styles.topSection}>
                        <Text style={styles.textWelcome}>Bienvenido a <Text style={{ color: "#D444DB", textTransform: "uppercase", fontWeight: "bold" }}>Medellin Hoops</Text></Text>
                        <View style={styles.navBarForm}>
                            <View style={styles.selectdBtn}>
                                <Text style={{ color: "#fff" }}>Iniciar sesión</Text>
                            </View>
                            <View style={styles.unSelectdBtn}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("SignUp")}
                                    style={styles.unSelectdBtn}>
                                    <Text style={{ color: "#fff" }}>Registrarse</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Correo</Text>
                        <TextInput
                            textContentType="emailAddress"
                            placeholder="E-mail"
                            autoFocus
                            onFocus={() => handleInputFocus("input1")}
                            onBlur={() => handleInputBlur()}
                            style={inputStyles.input1}
                        />
                        <Text style={styles.label}>Contraseña</Text>
                        <TextInput
                            textContentType="password"
                            secureTextEntry
                            placeholder="Contraseña"
                            onFocus={() => handleInputFocus("input2")}
                            onBlur={() => handleInputBlur()}
                            style={inputStyles.input2}
                        />

                    </View>
                    <TouchableOpacity style={styles.btnInitS} activeOpacity={0.7} >
                        <View style={{
                            position: "relative", flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Text style={{ color: "#fff", fontSize: 12 }}>Log In</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}
