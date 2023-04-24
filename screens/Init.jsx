import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { styles } from '../stylesheets/Init';
import { BtnInicio } from '../components/btnInicio';
//falta organizar las rutas
export function Init({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/backMain.png')}
                style={styles.image}
            >
                <BtnInicio navigation={navigation} />
                <Image source={require('../assets/Medellin_Hoops.png')} style={styles.text} />
                <TouchableOpacity onPress={() => navigation.navigate("SignIn")}
                    style={styles.btnIniciarS}>
                    <View style={{
                        position: "relative", flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Text style={{ color: "#000", fontSize: 12 }}>Iniciar Sesión</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.viewTextBottom}>
                    <Text style={styles.signUpText}>
                        ¿No tienes cuenta?
                    </Text>
                    <TouchableOpacity style={{
                        position: 'relative', marginLeft: 5
                    }}
                        onPress={() => navigation.navigate("SignUp")}
                    >
                        <Text style={styles.signUpLink}>
                            Registrate
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}
