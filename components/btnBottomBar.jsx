import { Text, View, TouchableOpacity, } from "react-native";
import { styles } from "../stylesheets/NavBarBottom";
import { useState, useRef } from "react";
export const NavBarBottom = ({ navigation, hinstance }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={hinstance === 'Home' ? { ...styles.btn, backgroundColor: "#fff" } : { ...styles.btn }} disabled={hinstance === 'Home' ? true : false} onPress={() => navigation.navigate('Home')}>
                <Text style={hinstance === 'Home' ? { ...styles.btnText, color: "#000" } : { ...styles.btnText }}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={hinstance === 'Programacion' ? { ...styles.btn, backgroundColor: "#fff" } : { ...styles.btn }} disabled={hinstance === 'Programacion' ? true : false} onPress={() => navigation.navigate('Programacion')}>
                <Text style={hinstance === 'Programacion' ? { ...styles.btnText, color: "#000" } : { ...styles.btnText }}>Programacion</Text>
            </TouchableOpacity>
            <TouchableOpacity style={hinstance === 'Torneos' ? { ...styles.btn, backgroundColor: "#fff" } : { ...styles.btn }} disabled={hinstance === 'Torneos' ? true : false} onPress={() => navigation.navigate('Torneos')}>
                <Text style={hinstance === 'Torneos' ? { ...styles.btnText, color: "#000" } : { ...styles.btnText }}>Torneos</Text>
            </TouchableOpacity>
        </View>
    )
}